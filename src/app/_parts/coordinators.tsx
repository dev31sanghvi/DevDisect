import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const coordinatorData = [
  {
    name: "Dr. Megha Mudolkar",
    faculty: true,
    about: "Assistant Professor, Computer Engineering Department",
    email: "megha.mudholkar@marwadieducation.edu.in",
    phone_no: "+91 92207 03083",
  },
  {
    name: "Prof. Santushti Betgeri",
    faculty: true,
    about: "Assistant Professor, Computer Engineering Department",
    email: "santushti.betgeri@marwadieducation.edu.in",
    phone_no: "+91 79728 62301",
  },
  {
    name: "Prof. Soram Wanglen",
    faculty: true,
    about: "Assistant Professor, Computer Engineering Department",
    email: "wanglen.soram@marwadieducation.edu.in",
    phone_no: "+91 82178 33560",
  },
  {
    name: "Tasnimul Hasan Tauhid",
    faculty: false,
    about: "Student Coordinator",
    email: "tasnimulhasan.tauhid110488@marwadiuniversity.ac.in",
    phone_no: "+91 91064 35011",
  },
  {
    name: "S. M. Ihtasham Hossain Amiree",
    faculty: false,
    about: "Student Coordinator",
    email: "smihtasham.amiree110449@marwadiuniversity.ac.in",
    phone_no: "+91 97376 26818",
  },
  {
    name: "Govana Vetrimani Moodely",
    faculty: false,
    about: "Student Coordinator",
    email: "vetrimanigovana. moodely110329@marwadiuniversity.ac.in",
    phone_no: "+91 72029 88541",
  },
  {
    name: "Susan Khadka",
    faculty: false,
    about: "Student Coordinator",
    email: "susan.khadka110332@marwadiuniversity.ac.in",
    phone_no: "+91 76220 70652",
  },
  {
    name: "Masruk Habib",
    faculty: false,
    about: "Student Coordinator",
    email: "masrukhabib.114214@marwadiuniversity.ac.in",
    phone_no: "+91 93163 32722",
  },
  {
    name: "Shrut Sureja",
    faculty: false,
    about: "Student Coordinator",
    email: "shrut.sureja115017@marwadiuniversity.ac.in",
    phone_no: "+91 81604 60050",
  },
  {
    name: "Dev Sanghvi",
    faculty: false,
    about: "Student Coordinator",
    email: "dev.sanghvi113027@marwadiuniversity.ac.in",
    phone_no: "+91 96028 45701",
  },
];

export default function Coordinators() {
  return (
    <div className="p-4 lg:p-24">
      <h2 className="font-bold text-3xl mb-2" id="problem-statements">
        Coordinators
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>About</TableHead>
            <TableHead>Email</TableHead>
            {/* <TableHead>Phone No.</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {coordinatorData.map((coordinator) => (
            <TableRow key={coordinator.name}>
              <TableCell>
                {coordinator.name}{" "}
                {/* {coordinator.faculty ? (
                  <Badge variant="default" className="ml-4">
                    Faculty Coordinator
                  </Badge>
                ) : (
                  <Badge variant="default" className="ml-4">
                    Student Coordinator
                  </Badge>
                )} */}
              </TableCell>
              <TableCell>{coordinator.about}</TableCell>
              <TableCell>{coordinator.email}</TableCell>
              {/* <TableCell>{coordinator.phone_no}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-8">
        For any queries, please contact the below mentioned phone numbers:
        <br />
        <ul className="list-disc ml-8">
          <li>
            <Link
              href="tel:+91 91064 35011"
              className="text-blue-500 underline"
            >
              +91 91064 35011
            </Link>{" "}
            (English, Hindi)
          </li>
          <li>
            <Link
              href="tel:+91 76220 70652"
              className="text-blue-500 underline"
            >
              +91 76220 70652
            </Link>{" "}
            (English, Hindi)
          </li>
          <li>
            <Link
              href="tel:+91 81604 60050"
              className="text-blue-500 underline"
            >
              +91 81604 60050
            </Link>{" "}
            (English, Hindi, Gujarati)
          </li>
        </ul>
      </div>
    </div>
  );
}
