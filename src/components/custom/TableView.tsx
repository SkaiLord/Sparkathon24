"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { LucideIcon, MoreHorizontal, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type ColumnType = {
  name: string;
  accessorKey: string;
  actions?: boolean;
  hidden?: boolean;
  profileImage?: boolean;
  customElement?: boolean;
  flexGrow?: boolean;
};

export function TableView({
  columns,
  data,
  className,
}: {
  columns: ColumnType[];
  data: any;
  className?: string;
}) {
  const router = useRouter();
  return (
    <div
      className={cn(
        "flex h-fit w-full flex-col justify-center gap-2",
        className
      )}
    >
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.name}
                className={cn({
                  "hidden md:table-cell": column.hidden,
                  "w-[100px]": column.profileImage,
                  "flex-grow": column.flexGrow,
                })}
              >
                {column.profileImage ? (
                  <span className="sr-only">{column.name}</span>
                ) : (
                  column.name
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row: any, index: number) => (
            <TableRow key={index} className="items-center hover:cursor-pointer">
              {columns.map((column) => (
                <TableCell
                  key={column.name}
                  className={cn({
                    "hidden md:table-cell": column.hidden,
                    "flex-grow": column.flexGrow,
                  })}
                >
                  {column.customElement ? (
                    row[column.accessorKey].element
                  ) : column.actions ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>
                          {row[column.name]}
                        </DropdownMenuLabel>
                        {row[column.accessorKey].map(
                          (action: string, index: number) => (
                            <DropdownMenuItem key={index}>
                              {action}
                            </DropdownMenuItem>
                          )
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : column.profileImage ? (
                    <Image
                      alt="profile image"
                      className="aspect-square rounded-md border object-cover p-1.5"
                      height="40"
                      src={row[column.accessorKey]}
                      width="40"
                    />
                  ) : (
                    row[column.accessorKey]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
