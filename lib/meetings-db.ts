import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-05-03",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Williams",
    wardBusiness: [{ description: "Sustaining of new Primary president" }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: "Sister Brown", topic: "Faith in Jesus Christ", type: "speaker" },
      { name: "Youth Choir", topic: "", type: "musical-number" },
    ],
    closingHymn: { number: 31, title: "O God, Our Help in Ages Past" },
    closingPrayer: "Brother Davis",
    announcements: ["Ward temple night: May 10"],
  },
  {
    id: 2,
    date: "2026-05-10",
    meetingType: "testimony",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    openingHymn: { number: 19, title: "We Thank Thee, O God, for a Prophet" },
    openingPrayer: "Brother Taylor",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 172,
      title: "'Tis Sweet to Sing the Matchless Love",
    },
    speakers: [],
    closingHymn: { number: 136, title: "Let Us All Press On" },
    closingPrayer: "Sister Anderson",
    announcements: [
      "Fast offerings due to bishop by end of month",
      "Youth activity: Thursday at 6pm",
    ],
  },
  {
    id: 3,
    date: "2026-05-17",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Miller",
    openingHymn: { number: 66, title: "Rejoice, the Lord Is King!" },
    openingPrayer: "Sister Garcia",
    wardBusiness: [
      { description: "Release of ward clerk" },
      { description: "Sustaining of new ward clerk" },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 174, title: "While of These Emblems We Partake" },
    speakers: [
      {
        name: "Brother Wilson",
        topic: "The Atonement of Jesus Christ",
        type: "speaker",
      },
      {
        name: "Sister Martinez",
        topic: "Family Home Evening",
        type: "speaker",
      },
    ],
    closingHymn: { number: 219, title: "True to the Faith" },
    closingPrayer: "Brother Thompson",
    announcements: ["Stake conference broadcast next Sunday"],
  },
  {
    id: 4,
    date: "2026-05-24",
    meetingType: "stake",
    presiding: "President Harris",
    conducting: "President Harris",
    openingHymn: { number: 248, title: "Called to Serve" },
    openingPrayer: "Sister Clark",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 193, title: "In Humility, Our Savior" },
    speakers: [
      {
        name: "Elder Robinson",
        topic: "Ministering to One Another",
        type: "speaker",
      },
      { name: "Stake Choir", topic: "", type: "musical-number" },
    ],
    closingHymn: { number: 249, title: "We Are All Enlisted" },
    closingPrayer: "Brother Lewis",
    announcements: [
      "No regular ward meetings this week due to stake conference",
    ],
  },
  {
    id: 5,
    date: "2026-05-31",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    openingHymn: { number: 89, title: "Come, Come, Ye Saints" },
    openingPrayer: "Sister Young",
    wardBusiness: [{ description: "Baby blessing: Emma Rose Thompson" }],
    stakeBusiness: false,
    sacramentHymn: { number: 182, title: "Reverently and Meekly Now" },
    speakers: [
      { name: "Sister Walker", topic: "Missionary Work", type: "speaker" },
      { name: "Primary Children", topic: "", type: "musical-number" },
      { name: "Brother Hall", topic: "Enduring to the End", type: "speaker" },
    ],
    closingHymn: { number: 219, title: "True to the Faith" },
    closingPrayer: "Sister King",
    announcements: [
      "Ward campout: June 6-7",
      "Sign-ups for youth conference due by Wednesday",
    ],
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter((m) => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((m) => m.id === id) ?? null;
}
