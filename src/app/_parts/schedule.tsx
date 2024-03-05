import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const schedule = [
  {
    date: "08 February, 2024",
    title: "Registration Starts",
    additional_details:
      "Registration for the event will start from 08 February, 2024.",
  },
  {
    date: "15 February, 2024",
    title: "Registration Ends",
    additional_details:
      "No more registrations will be accepted after 15 February, 2024 11:59 PM.",
  },
  {
    date: "16 February, 2024",
    title: "PPT Submission Starts",
    additional_details: "Submission of PPT will start from 16 February, 2024.",
  },
  {
    date: "19 February, 2024",
    title: "PPT Submission Ends",
    additional_details:
      "PPT submission will end on 19 February, 2024 11:59 PM.",
  },
  {
    date: "26 February, 2024",
    title: "Shortlist Publised",
    additional_details: "All shortlisted teams will be notified via email.",
  },
  {
    date: "05 March, 2024",
    title: "Expert talk on Git & GitHub",
    additional_details:
      "Expert talk and hands-on session on how to use Git & GitHub.",
  },
  // {
  //   date: "01 March, 2024",
  //   title: "Expert talk on Hackathon Participation",
  //   additional_details:
  //     "Expert talk on how to participate in a hackathon and what to expect",
  // },
  {
    date: "06 March, 2024",
    title: "Hack Fest - 2024",
    additional_details:
      "The event will be held on 06 March, 2024 at Marwadi University.",
  },
];
export default function Schedule() {
  return (
    <div className="p-4 lg:p-24">
      <h2 className="font-bold text-3xl mb-2" id="schedule">
        Schedule
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Date</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{item.date}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.additional_details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
