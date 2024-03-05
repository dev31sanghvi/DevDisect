import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const problemStatements = [
  {
    id: "001",
    domain: "AI",
    title: "Remote Health Diagnostic Tool",
    description:
      "Develop an AI-driven mobile health diagnostic tool that can interpret symptoms and suggest preliminary diagnoses or recommend seeking professional medical help, aiming to improve access to healthcare information, especially in remote areas.",
  },
  {
    id: "002",
    domain: "AI",
    title: "Water Quality Monitoring and Alert System",
    description:
      "Develop a solution that uses AI to analyze user-reported data on water quality and issue alerts about water safety, supporting efforts to ensure access to clean water and sanitation",
  },
  {
    id: "003",
    domain: "AI",
    title: "Accessibility Compliance Scanner for Web Services",
    description:
      "Develop an AI-based tool that scans websites and mobile apps to ensure they meet accessibility standards, aiming to reduce inequalities by making digital services usable for people with disabilities.",
  },
  {
    id: "004",
    domain: "AI",
    title: "Waste Reduction and Recycling Companion App",
    description:
      "Create a solution that uses image recognition to educate users on sorting waste and finding local recycling centers, promoting responsible consumption and production.",
  },
  {
    id: "005",
    domain: "Web, Mobile App",
    title: "Digital Financial Inclusion App",
    description:
      "Develop a web or mobile app to provide personalized financial education, savings advice, and microloan opportunities to users in impoverished regions, aiming to lift people out of poverty by promoting financial literacy and inclusion.",
  },
  {
    id: "006",
    domain: "Web, Mobile App",
    title: "Personalized Learning Assistant",
    description:
      "Create a web or mobile application that adapts learning content to the individual needs of students, providing personalized exercises, feedback, and support to enhance the quality of education for all.",
  },
  {
    id: "007",
    domain: "Web, Mobile App",
    title: "Safe Reporting and Support Platform for Gender-Based Violence",
    description:
      "Build a secure, anonymous web or mobile platform that allows victims of gender-based violence to report incidents, connect with legal and psychological support, and access safe houses, promoting gender equality and protection.",
  },
  {
    id: "008",
    domain: "Web, Mobile App",
    title: "Freelance Job Matching Platform",
    description:
      "Develop a web or mobile platform that matches individuals with freelance and remote work opportunities that align with their skills and experience, promoting decent work and economic growth.",
  },
  {
    id: "009",
    domain: "Web, Mobile App",
    title: "Urban Carpooling and Public Transport App",
    description:
      "Build a web or mobile app to optimize carpooling routes and integrate public transportation schedules, encouraging sustainable urban commuting and reducing carbon emissions.",
  },
  {
    id: "010",
    domain: "Web, Mobile App",
    title: "Wildlife Monitoring and Anti-Poaching System",
    description:
      "Utilize mobile or web technology to create a system for monitoring wildlife movements and reporting poaching activities to authorities, aiming to protect terrestrial ecosystems and biodiversity.",
  },
  {
    id: "011",
    domain: "Web",
    title: "Global SDG Collaboration Platform",
    description:
      "Create a web platform that facilitates collaboration between NGOs, governments, and the private sector on SDG-related projects, match projects with potential partners and resources, enhancing global partnerships for sustainable development.",
  },
];

export default function ProblemStatements() {
  return (
    <div className="p-4 lg:p-24">
      <h2 className="font-bold text-3xl mb-2" id="problem-statements">
        Problem Statements
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead className="w-[130px]">Domain</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problemStatements.map((problemStatement) => (
            <TableRow key={problemStatement.id}>
              <TableCell>PS{problemStatement.id}</TableCell>
              <TableCell>{problemStatement.domain}</TableCell>
              <TableCell>{problemStatement.title}</TableCell>
              <TableCell>{problemStatement.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
