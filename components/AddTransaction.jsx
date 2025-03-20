// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { Button } from "./ui/button";

// const AddTransaction = () => {
//   return (
//     <Drawer>
//       <DrawerTrigger className="bg-gray-200/50 min-w-fit h-full text-sm font-semibold">
//         Add Transaction
//       </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader>
//           <DrawerTitle>Are you absolutely sure?</DrawerTitle>
//           <DrawerDescription>This action cannot be undone.</DrawerDescription>
//         </DrawerHeader>
//         <DrawerFooter>
//           <Button variant="outline">Submit</Button>
//           <DrawerClose>
//             <Button variant="outline">Cancel</Button>
//           </DrawerClose>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   );
// };

// export default AddTransaction;
"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddTransaction() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="rounded-none" size="sm">
            Add Transaction
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
            <DialogDescription>
              Add transaction details here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Transaction</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Transaction</DrawerTitle>
          <DrawerDescription>
            Add transaction details here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      {/* Date */}
      <div className="grid gap-2">
        <Label className="text-muted-foreground" htmlFor="date">
          Date
        </Label>
        <Input type="date" id="date" className="text-primary" />
      </div>

      {/* Amount and Cleared */}
      <div className="flex items-center gap-4">
        <div className="flex-1 gap-2 flex flex-col">
          <Label className="text-muted-foreground" htmlFor="amount">
            Amount
          </Label>
          <Input type="number" id="amount" placeholder="Enter amount" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Label className="text-muted-foreground" htmlFor="cleared">
            Cleared
          </Label>
          <Input type="checkbox" id="cleared" />
        </div>
      </div>

      {/* Type */}
      <div className="grid gap-2">
        <Label className="text-muted-foreground" htmlFor="type">
          Type
        </Label>
        <select id="type" className="border rounded-md p-2">
          <option value="debit">Debit</option>
          <option value="deposit">Deposit</option>
          <option value="transfer">Transfer</option>
        </select>
      </div>

      {/* Category */}
      <div className="grid gap-2">
        <Label className="text-muted-foreground" htmlFor="category">
          Category
        </Label>
        <select id="category" className="border rounded-md p-2">
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Description (Payee) */}
      <div className="grid gap-2">
        <Label className="text-muted-foreground" htmlFor="description">
          Description (Payee)
        </Label>
        <Input
          type="text"
          id="description"
          placeholder="Enter payee or description"
        />
      </div>

      {/* Notes */}
      <div className="grid gap-2">
        <Label className="text-muted-foreground" htmlFor="notes">
          Notes
        </Label>
        <textarea
          id="notes"
          rows="3"
          className="border rounded-md p-2"
          placeholder="Add any additional notes"
        ></textarea>
      </div>

      {/* Submit Button */}
      <Button type="submit">Save Transaction</Button>
    </form>
  );
}
