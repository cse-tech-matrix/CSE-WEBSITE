export interface Event {
  title: string;
  date: string;
  description: string;
  driveLink: string;
  image?: string;
  category?: "symposium" | "celebration" | "ceremony" | "workshop" | "competition";
  comingSoon?: boolean;
}

export interface EventYear {
  year: string;
  events: Event[];
}

export const eventsData: EventYear[] = [
  {
    year: "2026",
    events: [
      {
        title: "SYNECTICS'26",
        date: "Feb 2026",
        description: "National Level Technical Symposium — the biggest edition yet with cutting-edge competitions and workshops.",
        driveLink: "#",
        category: "symposium",
        comingSoon: true,
      },
      {
        title: "Innovation Day 2026",
        date: "Feb 2026",
        description: "A day dedicated to showcasing innovative projects, ideas, and technological breakthroughs by CSE students.",
        driveLink: "#",
        category: "competition",
        comingSoon: true,
      },
    ],
  },
  {
    year: "2025",
    events: [
      {
        title: "Aura'25",
        date: "Nov 2025",
        description: "Inter-department technical and cultural event with innovative showcases and exciting competitions.",
        driveLink: "https://drive.google.com/drive/folders/1bm0PTScYW2Q9CrOr170-6gedlRbKo2Br?usp=drive_link",
        category: "competition",
      },
      {
        title: "Association Inauguration",
        date: "Oct 2025",
        description: "Official inauguration ceremony of the CSE Students Association for the academic year 2025-26.",
        driveLink: "https://drive.google.com/drive/folders/1glS1ikrFVIMi6ZrPyIqjjxGGlPygD8cl?usp=drive_link",
        category: "ceremony",
      },
      {
        title: "Saraswathi Pooja",
        date: "Sep 2025",
        description: "Celebration of Saraswathi Pooja — honoring the goddess of knowledge and learning.",
        driveLink: "https://drive.google.com/drive/folders/1-YmXxyQBL6tjIfqbKOHNJjgJiz4dWhix?usp=drive_link",
        category: "celebration",
      },
      {
        title: "Navratri Pooja",
        date: "Sep 2025",
        description: "Traditional Navratri celebrations with cultural programs and devotional activities.",
        driveLink: "https://drive.google.com/drive/folders/1keoFo3Mbr_s8T2cMzpxAjL_Zo9DiwNfh?usp=drive_link",
        category: "celebration",
      },
      {
        title: "Teachers Day 2025",
        date: "Sep 2025",
        description: "Celebration honoring teachers with cultural programs and activities to show gratitude.",
        driveLink: "https://drive.google.com/drive/folders/1Z7-cK7oONpIpfL1h6oOB9f2MLx3-ASBE?usp=drive_link",
        category: "celebration",
      },
      {
        title: "SYNECTICS'25",
        date: "Mar 2025",
        description: "National Level Technical Symposium featuring technical events, workshops, and competitions.",
        driveLink: "https://drive.google.com/drive/folders/1pQ2ZnrXSy7x-dIOayaeSVrpfRF0aosop?usp=drive_link",
        image: "/lovable-uploads/e064b745-58a0-4f30-9437-7d9ce95fd521.png",
        category: "symposium",
      },
      {
        title: "Investiture Ceremony",
        date: "Mar 2025",
        description: "The Investiture Ceremony is when new student leaders get their badges and take an oath.",
        driveLink: "https://drive.google.com/drive/folders/1IyG7ZfHogAMbvOgIz33kAMqLCA5blmt7?usp=drive_link",
        category: "ceremony",
      },
      {
        title: "Pongal Celebration 2025",
        date: "Jan 2025",
        description: "Traditional harvest festival celebration with cultural activities.",
        driveLink: "https://drive.google.com/drive/folders/1AUS9MpW05no-f_HsgDGb9VlOITqfWHUk?usp=drive_link",
        category: "celebration",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        title: "Aura'24",
        date: "Oct 2024",
        description: "Collaborative events between different departments.",
        driveLink: "https://drive.google.com/drive/folders/1lPYTw-e2U0lG_yHxKz2luROgSzdlKcIf?usp=drive_link",
        image: "/lovable-uploads/b9cbd383-ef22-469a-89cc-bac02cf4d752.png",
        category: "competition",
      },
      {
        title: "Teachers Day 2024",
        date: "Sep 2024",
        description: "Celebration honoring teachers with cultural programs and activities.",
        driveLink: "https://drive.google.com/drive/folders/1Z7-cK7oONpIpfL1h6oOB9f2MLx3-ASBE?usp=drive_link",
        category: "celebration",
      },
      {
        title: "Induction Program 2028 Batch",
        date: "Sep 2024",
        description: "Welcome program for the new batch of students.",
        driveLink: "https://drive.google.com/drive/folders/1cKPw4Ny8l5BY8NfL-9snsgzemzZ3TWQw?usp=drive_link",
        category: "ceremony",
      },
      {
        title: "SYNECTICS'24",
        date: "Mar 2024",
        description: "National Level Technical Symposium with various technical competitions.",
        driveLink: "https://drive.google.com/drive/folders/1q_ZyZsSaA-u98v29HcyC3dp-38wLvHwv?usp=drive_link",
        category: "symposium",
      },
    ],
  },
];
