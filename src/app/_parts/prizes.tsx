import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Prizes() {
  return (
    <div className="p-4 lg:p-24">
      <h2 className="font-bold text-3xl mb-2" id="prizes">
        Prizes
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Place</TableHead>
            <TableHead className="text-center">Cash Prize</TableHead>
            <TableHead className="text-center">Certificate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1st Prize</TableCell>
            <TableCell className="text-center">₹10,000</TableCell>
            <TableCell className="text-center">✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2nd Prize</TableCell>
            <TableCell className="text-center">₹7,000</TableCell>
            <TableCell className="text-center">✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">3rd Prize</TableCell>
            <TableCell className="text-center">₹5,000</TableCell>
            <TableCell className="text-center">✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">All Participant</TableCell>
            <TableCell className="text-center">❌</TableCell>
            <TableCell className="text-center">✅</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
