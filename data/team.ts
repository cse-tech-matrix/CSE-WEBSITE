export interface TeamMember {
  name: string;
  role?: string;
  year: string;
  image: string;
  tag?: string;
}

export const hod: TeamMember = {
  name: "Dr. T. Rajasekaran",
  role: "Prof. & Head / CSE",
  year: "",
  image: "/lovable-uploads/50885d3b-8143-43cd-9747-546663c22c17.png",
};

export const incharges: TeamMember[] = [
  {
    name: "Dr. S. Karuppusamy",
    role: "AsP / CSE",
    year: "",
    image: "/lovable-uploads/71f5b66a-b7fb-4a7c-a25a-cf47bdd6b834.png",
  },
  {
    name: "Mr. K. U. Ranjith",
    role: "AP / CSE",
    year: "",
    image: "/logo/ranjith.png",
  },
];

export const officeBearers: TeamMember[] = [
  { name: "Mr. G. Mohana Prasath", role: "Secretary", year: "IV Year", image: "/Office bearers/Mohana prasath.png" },
  { name: "Mr. M. Kavikumar", role: "Joint Secretary", year: "III Year", image: "/Office bearers/kavikumar.png" },
  { name: "Mr. C. Udhay Karthik", role: "Treasurer", year: "IV Year", image: "/Office bearers/Udhay Karthik.png" },
  { name: "Mr. S. Balahariharan", role: "Joint Treasurer", year: "III Year", image: "/Office bearers/Balahariharan.png" },
];

export const executiveMembers: TeamMember[] = [
  { name: "Mr. M. Dhilip", year: "IV Year", image: "/office/Dhilip.png", tag: "Event Management" },
  { name: "Ms. M. Hanushree", year: "IV Year", image: "/office/Hanushree.png", tag: "Technical" },
  { name: "Mr. K. Rumesh Kumaran", year: "IV Year", image: "/office/Rumesh.png", tag: "Logistics" },
  { name: "Ms. T. Saarumathi", year: "IV Year", image: "/office/Saarumathi.png", tag: "Content Writing" },
  { name: "Ms. R. Abinaya", year: "III Year", image: "/office/abinaya.png", tag: "Technical" },
  { name: "Mr. S. S. Arunesh", year: "III Year", image: "/office/Arunesh.png", tag: "Web Designing" },
  { name: "Mr. M. S. Phurnes", year: "III Year", image: "/office/Phurnes.png", tag: "Research & Development" },
  { name: "Ms. A. K. Nandhana", year: "III Year", image: "/office/Nandhana.png", tag: "Content Writing" },
  { name: "Ms. S. Subaranjani", year: "III Year", image: "/office/Subaranjani.png", tag: "Content Writing" },
  { name: "Mr. Santhosh Dinakaran", year: "III Year", image: "/office/Santhosh.png", tag: "Event Management" },
  { name: "Mr. P. Y. Ashwin Uvraj", year: "II Year", image: "/office/Ashwin.png", tag: "Event Management" },
  { name: "Ms. A. J. Deshika", year: "II Year", image: "/office/Deshika.png", tag: "Technical" },
  { name: "Mr. B. Harish Kumar", year: "II Year", image: "/office/Harish.png", tag: "Video Editing" },
  { name: "Ms. T. L. Jana Sri", year: "II Year", image: "/office/Jana%20Sri.png", tag: "Event Management" },
  { name: "Mr. M. Pradeesh", year: "II Year", image: "/office/Pradeesh.jpg", tag: "Web Designing" },
  { name: "Mr. R. Rupanarayanan", year: "II Year", image: "/office/Rupan.png", tag: "Research & Development" },
  { name: "Ms. R. Shamiksha", year: "II Year", image: "/office/Shamiksha.jpg", tag: "Content Writing" },
  { name: "Mr. R. Sree Nandhu", year: "II Year", image: "/office/Sree%20Nandhu.png", tag: "Video Editing" },
  { name: "Ms. S. Rithika", year: "I Year", image: "/office/ritika.png", tag: "General" },
  { name: "Mr. K. Manish", year: "I Year", image: "/office/Manish.png", tag: "General" },
  { name: "Ms. S. Sruthi", year: "I Year", image: "/office/Sruthi.png", tag: "Event Management" },
  { name: "Ms. H. Lithika Shree", year: "I Year", image: "/office/litika.png", tag: "Research & Development" },
  { name: "Ms. R. Dhanu Shree", year: "I Year", image: "/office/dhanu.png", tag: "Content Writing" },
  { name: "Ms. S. Oviya", year: "I Year", image: "/office/Oviya.png", tag: "General" },
  { name: "Mr. A. Harish", year: "I Year", image: "/office/image.png", tag: "Technical" },
  { name: "Mr. M. Someshkumar", year: "I Year", image: "/office/Someshkumar.png", tag: "General" },
];

export const coreMembers: TeamMember[] = [
  { name: "Ms. B. Sharmila", year: "IV Year", image: "/core/sharmila-new.png", tag: "Research & Development" },
  { name: "Mr. S. R. Chanthuru", year: "IV Year", image: "/core/Chanthuru.png", tag: "Technical" },
  { name: "Mr. R. Dharun Raj", year: "IV Year", image: "/core/Dharun Raj.png", tag: "General" },
  { name: "Ms. V. Shalini", year: "IV Year", image: "/core/Shalini V.png", tag: "General" },
  { name: "Mr. A. Mohamed Abu Bakkar Siddiq", year: "III Year", image: "/core/Abu Bakkar.png", tag: "Logistics" },
  { name: "Ms. S. Dhivya", year: "III Year", image: "/core/dhivya.png", tag: "General" },
  { name: "Ms. S. Aashiqa Fathima", year: "II Year", image: "/core/Aashiqa.png", tag: "Event Management" },
  { name: "Mr. U. Mahendran", year: "II Year", image: "/core/Mahendran.png", tag: "Web Designing" },
  { name: "Mr. G. Prithiv Krishna", year: "II Year", image: "/core/Prithiv.png", tag: "Video Editing" },
  { name: "Ms. E. Subitcha", year: "II Year", image: "/core/Subitcha.png", tag: "Content Writing" },
  { name: "Ms. N. Shalini", year: "III Year", image: "/office/Shalini%20N.png", tag: "Event Management" },
];

export const developers: TeamMember[] = [
  { name: "Mr. G. Mohana Prasath", role: "Engineering Lead", year: "IV Year", image: "/Office bearers/Mohana prasath.png" },
  { name: "Mr. S. R. Chanthuru", role: "Interface Engineer", year: "IV Year", image: "/core/Chanthuru.png" },
  { name: "Mr. M. Dhilip", role: "Principal Designer", year: "IV Year", image: "/office/Dhilip.png" },
  { name: "Mr. R. Rupanarayanan", role: "Information Architect", year: "II Year", image: "/office/Rupan.png" },
  { name: "Mr. K. Rumesh Kumaran", role: "Quality Strategist", year: "IV Year", image: "/office/Rumesh.png" },
];
