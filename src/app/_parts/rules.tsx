import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const rules = [
  {
    title: "Team Size",
    details: "A team can consist of minimum 3 and maximum 4 members.",
  },
  // {
  //   title: "Candidate Eligibility",
  //   details:
  //     "The event is open to all students of Computer Engineering Department, Marwadi University.",
  // },
  {
    title: "Registration Fees",
    details: "There are no registration fees for the event.",
  },
  {
    title: "Theme",
    details:
      "The theme of the hackathon is Tech For Tommorrow's Sustainability.",
  },
  {
    title: "Solution",
    details:
      "Participant can create the solution in any technology stack of their choice. But the solution should be in the domain of AI, Web, or Mobile App.",
  },
  {
    title: "Judging Criteria",
    details:
      "The submissions will be judged on the basis of innovation, creativity, potential impact, quality of code and completeness of the solution.",
  },
  // {
  //   title: "Language",
  //   details: "The language of communication will be English.",
  // },
  // {
  //   title: "Duration",
  //   details: "The event will last for 6 hours.",
  // },
  {
    title: "Platform & Venue",
    details:
      "The event will be conducted offline. The venue is Marwadi University, Rajkot.",
  },
  {
    title: "Submission",
    details:
      "The submissions will be accepted through GitHub only. Judges will also review the code on the participants' device.",
  },
];

export default function Rules() {
  return (
    <div className="p-4 lg:p-24">
      <h2 className="font-bold text-3xl mb-2" id="rules">
        Rules
      </h2>
      <Table>
        <TableBody>
          {rules.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
