
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { suggestProducts } from '@/ai/flows/ai-product-suggestor';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email address").optional(),
  productInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function InquiryForm() {
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      productInterest: "",
      message: "",
    },
  });

  async function handleAiSuggestion() {
    const message = form.getValues("message");
    if (!message || message.length < 10) {
      toast({
        title: "More detail needed",
        description: "Please write a bit more about your needs for the AI to suggest products.",
      });
      return;
    }

    setIsAiLoading(true);
    try {
      const result = await suggestProducts({ inquiryMessage: message });
      setSuggestedProducts(result.suggestedProducts);
      if (result.suggestedProducts.length > 0) {
        toast({
          title: "Suggestions ready!",
          description: "Our AI found some relevant products for you.",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsAiLoading(false);
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border-2 border-primary p-12 text-center"
      >
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-3xl font-black mb-4">Inquiry Submitted!</h3>
        <p className="text-muted-foreground font-medium mb-8">
          Thank you for reaching out to Sam Robotics. Our engineering team will review your requirements and get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setSubmitted(false)}
          className="bg-secondary rounded-none"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white border border-border p-8 md:p-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-[10px] tracking-widest">Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="rounded-none border-2 focus:border-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-[10px] tracking-widest">Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Corp" {...field} className="rounded-none border-2 focus:border-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-[10px] tracking-widest">Phone Number *</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <div className="px-3 flex items-center bg-muted border-2 border-r-0 font-bold text-xs">+91</div>
                      <Input placeholder="9876543210" {...field} className="rounded-none border-2 focus:border-primary" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold uppercase text-[10px] tracking-widest">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" type="email" {...field} className="rounded-none border-2 focus:border-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center mb-1">
                  <FormLabel className="font-bold uppercase text-[10px] tracking-widest">Your Requirements *</FormLabel>
                  <button
                    type="button"
                    onClick={handleAiSuggestion}
                    disabled={isAiLoading}
                    className="text-[10px] font-black tracking-widest uppercase text-primary flex items-center gap-1 hover:underline disabled:opacity-50"
                  >
                    {isAiLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                    Analyze with AI
                  </button>
                </div>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your machinery needs in detail..." 
                    className="rounded-none border-2 focus:border-primary min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <AnimatePresence>
            {suggestedProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-primary/5 border-l-4 border-primary p-4 mb-4"
              >
                <p className="text-[10px] font-black tracking-widest uppercase text-primary mb-2">AI Product Recommendations</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedProducts.map((prod) => (
                    <span 
                      key={prod} 
                      className="px-2 py-1 bg-white border border-primary/20 text-[10px] font-bold cursor-pointer hover:bg-primary hover:text-white transition-colors"
                      onClick={() => form.setValue("productInterest", prod)}
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <FormField
            control={form.control}
            name="productInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold uppercase text-[10px] tracking-widest">Product Interest</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-none border-2 focus:border-primary">
                      <SelectValue placeholder="Select a solution" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Liquid Filling Machines">Liquid Filling Machines</SelectItem>
                    <SelectItem value="Capping Machines">Capping Machines</SelectItem>
                    <SelectItem value="Labeling Machines">Labeling Machines</SelectItem>
                    <SelectItem value="Conveyor Systems">Conveyor Systems</SelectItem>
                    <SelectItem value="Cartoning Machines">Cartoning Machines</SelectItem>
                    <SelectItem value="Palletizing Systems">Palletizing Systems</SelectItem>
                    <SelectItem value="Complete Turnkey Solution">Complete Turnkey Solution</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-black rounded-none h-14 text-base tracking-widest uppercase">
            Submit Inquiry
          </Button>
        </form>
      </Form>
    </div>
  );
}
