"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import type { Role } from "@/types/role";

const schema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().max(255).optional().or(z.literal("")),
});

interface EditRoleDialogProps {
  role: Role;
  onClose: () => void;
  onConfirm: (role: Role) => void;
}

/**
 * EditRoleDialog is a controlled dialog.
 * It does not manage its own open state and relies entirely on the parent.
 */
export function EditRoleDialog({
  role,
  onClose,
  onConfirm,
}: EditRoleDialogProps) {
  const [loading, setLoading] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: role.name,
      description: role.description ?? "",
    },
  });

  const onSubmit = async (values: any) => {
    try {
      setLoading(true);

      const updatedRole: Role = {
        ...role,
        name: values.name.trim(),
        description: values.description?.trim() || "",
      };

      toast.success("Role updated successfully");
      onConfirm(updatedRole);
      onClose();
    } catch {
      toast.error("Failed to update role");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit role</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
