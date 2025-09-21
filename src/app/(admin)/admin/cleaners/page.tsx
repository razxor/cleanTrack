"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Adjust import path as needed
import Badge from "@/components/ui/badge/Badge"; // Adjust import path as needed

type Cleaner = {
  id: number;
  name: string;
  area: string;
  status: "Active" | "Inactive";
};

const initialCleaners: Cleaner[] = [
  { id: 1, name: "Alice Brown", area: "Lobby", status: "Active" },
  { id: 2, name: "Bob White", area: "Offices", status: "Inactive" },
];

export default function ManageCleanersPage() {
  const [cleaners, setCleaners] = useState(initialCleaners);

  return (
    <div className="p-8">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h1 className="text-xl font-semibold text-gray-800">Manage Cleaners</h1>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition">
            Add Cleaner
          </button>
        </div>
        <div className="max-w-full overflow-x-auto px-6 pb-6">
          <div className="min-w-[600px]">
            <Table>
              <TableHeader className="border-b border-gray-100">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-xs uppercase"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-xs uppercase"
                  >
                    Area
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-xs uppercase"
                  >
                    Status
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-start text-xs uppercase"
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-100">
                {cleaners.map((cleaner) => (
                  <TableRow key={cleaner.id}>
                    <TableCell className="px-5 py-4 text-start">
                      <span className="font-medium text-gray-800">{cleaner.name}</span>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-start text-gray-500">
                      {cleaner.area}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-start">
                      <Badge
                        size="sm"
                        color={cleaner.status === "Active" ? "success" : "destructive"}
                      >
                        {cleaner.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-start">
                      <button className="inline-flex items-center px-3 py-1 bg-warning text-white text-xs font-medium rounded mr-2 hover:bg-warning-dark transition">
                        Edit
                      </button>
                      <button className="inline-flex items-center px-3 py-1 bg-danger text-white text-xs font-medium rounded hover:bg-danger-dark transition">
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}