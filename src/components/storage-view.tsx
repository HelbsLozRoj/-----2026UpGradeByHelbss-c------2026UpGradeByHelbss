"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Trash2, Database } from "lucide-react";
import type { StorageItem } from "@/app/page";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";

/**
 * @fileOverview 2026~ ByHelbss(C) Storage Viewer Component
 */

type StorageViewProps = {
  items: StorageItem[];
  onAddItem: (key: string, value: string) => void;
  onDeleteItem: (key: string) => void;
};

const formSchema = z.object({
  key: z.string().min(1, "Key required"),
  value: z.string().min(1, "Value required"),
});

export function StorageView({ items, onAddItem, onDeleteItem }: StorageViewProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { key: "", value: "" },
  });

  function onSubmit_2026_ByHelbss(values: z.infer<typeof formSchema>) {
    onAddItem(values.key, values.value);
    form.reset();
  }

  return (
    <div className="grid grid-cols-1 gap-12">
      <Card className="bg-black/60 border-white/5 rounded-[2rem] shadow-2xl p-6">
        <CardHeader className="pb-8">
          <CardTitle className="flex items-center gap-3 text-white font-helbss text-3xl">
            <Plus className="size-6 text-primary" />
            Add Storage Entry
          </CardTitle>
          <CardDescription className="text-white/40 text-[10px] uppercase tracking-widest font-mono">
            2026~ ByHelbss(C) System Write
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit_2026_ByHelbss)} className="space-y-8 max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="key"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/50 uppercase text-[10px] tracking-widest font-mono">Key</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., theme" 
                          {...field} 
                          className="bg-black border-white/5 text-white h-14 rounded-xl focus:border-primary/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="value"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/50 uppercase text-[10px] tracking-widest font-mono">Value</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., dark" 
                          {...field} 
                          className="bg-black border-white/5 text-white h-14 rounded-xl focus:border-primary/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="bg-primary text-black hover:bg-primary/90 h-14 px-10 rounded-xl font-bold">
                <Plus className="mr-2 size-4" /> Add Item
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card className="bg-black/60 border-white/5 rounded-[2rem] shadow-2xl p-6">
        <CardHeader className="pb-8">
          <CardTitle className="flex items-center gap-3 text-white font-helbss text-3xl">
            <Database className="size-6 text-primary" />
            Local Storage Contents
          </CardTitle>
          <CardDescription className="text-white/40 text-[10px] uppercase tracking-widest font-mono">
            2026~ ByHelbss(C) Data View
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-2xl border border-white/5 overflow-hidden">
            <Table className="terminal-table">
              <TableHeader className="bg-white/[0.02]">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="text-white/30 uppercase text-[10px] tracking-widest font-mono h-14">Key</TableHead>
                  <TableHead className="text-white/30 uppercase text-[10px] tracking-widest font-mono h-14">Value</TableHead>
                  <TableHead className="text-right text-white/30 uppercase text-[10px] tracking-widest font-mono h-14">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.length > 0 ? (
                  items.map(({ key, value }) => (
                    <TableRow key={key} className="border-white/5 hover:bg-white/[0.01]">
                      <TableCell className="font-mono text-primary/70">{key}</TableCell>
                      <TableCell className="text-white/60">{value}</TableCell>
                      <TableCell className="text-right">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                             <Button variant="ghost" size="icon" className="hover:bg-destructive/10">
                                <Trash2 className="size-4 text-destructive/50" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-black border-white/10">
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-white font-helbss">System Deletion Confirmation</AlertDialogTitle>
                              <AlertDialogDescription className="text-white/50">
                                Permanently remove key <span className="text-primary font-mono">{key}</span> from 2026~ ByHelbss(C) storage?
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="bg-white/5 text-white border-white/10 hover:bg-white/10">Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => onDeleteItem(key)} className="bg-destructive text-white hover:bg-destructive/90">Confirm Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className="h-40 text-center text-white/20 font-mono italic">
                      SYSTEM_STORAGE_2026: NULL
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
