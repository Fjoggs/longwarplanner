export interface Missions {
  abductions: number;
  terror: number;
  research: number;
  scout: number;
  harvest: number;
  hunt: number;
  bomb: number;
  council: number;
}

const resourceLevel0 = [
  {
    abductions: 3.5,
    terror: 0,
    research: 0,
    scout: 3,
    harvest: 3,
    hunt: 0,
    bomb: 0,
    council: 1,
  },
  {
    abductions: 3.5,
    terror: 0,
    research: 0,
    scout: 3,
    harvest: 3,
    hunt: 0.5,
    bomb: 0,
    council: 1,
  },
  {
    abductions: 3.5,
    terror: 0,
    research: 0,
    scout: 3,
    harvest: 3,
    hunt: 1,
    bomb: 0,
    council: 1,
  },
  {
    abductions: 2.5,
    terror: 0,
    research: 0,
    scout: 3,
    harvest: 3,
    hunt: 1.5,
    bomb: 1,
    council: 1,
  },
  {
    abductions: 2,
    terror: 0,
    research: 0,
    scout: 3,
    harvest: 3,
    hunt: 2,
    bomb: 2,
    council: 1,
  },
];

const resourceLevel1 = [
  {
    abductions: 4.5,
    terror: 1,
    research: 0,
    scout: 3,
    harvest: 3,
    hunt: 0,
    bomb: 0,
    council: 1,
  },
  {
    abductions: 4,
    terror: 1,
    research: 1,
    scout: 3,
    harvest: 2,
    hunt: 0.5,
    bomb: 0.5,
    council: 1,
  },
  {
    abductions: 3.5,
    terror: 1,
    research: 1,
    scout: 3,
    harvest: 2,
    hunt: 1,
    bomb: 1,
    council: 1,
  },
  {
    abductions: 3,
    terror: 1,
    research: 1,
    scout: 3.5,
    harvest: 2,
    hunt: 1.5,
    bomb: 1.5,
    council: 1,
  },
  {
    abductions: 2.5,
    terror: 1,
    research: 1,
    scout: 3.5,
    harvest: 2,
    hunt: 2,
    bomb: 2,
    council: 1,
  },
];

const resourceLevel2 = [
  {
    abductions: 5,
    terror: 1,
    research: 0,
    scout: 4,
    harvest: 2,
    hunt: 0,
    bomb: 0,
    council: 1,
  },
  {
    abductions: 5,
    terror: 1,
    research: 1,
    scout: 4,
    harvest: 2,
    hunt: 1,
    bomb: 1,
    council: 1,
  },
  {
    abductions: 4.5,
    terror: 1,
    research: 1,
    scout: 4,
    harvest: 2,
    hunt: 1,
    bomb: 1,
    council: 1,
  },
  {
    abductions: 4,
    terror: 1,
    research: 1,
    scout: 5,
    harvest: 2,
    hunt: 2,
    bomb: 2,
    council: 1,
  },
  {
    abductions: 3.5,
    terror: 2,
    research: 2,
    scout: 5,
    harvest: 1,
    hunt: 2,
    bomb: 2,
    council: 1,
  },
];

const resourceLevel3 = [
  {
    abductions: 5,
    terror: 1,
    research: 0,
    scout: 4,
    harvest: 2,
    hunt: 0,
    bomb: 1,
    council: 1,
  },
  {
    abductions: 5,
    terror: 1,
    research: 1,
    scout: 5,
    harvest: 1,
    hunt: 1,
    bomb: 2,
    council: 1,
  },
  {
    abductions: 5,
    terror: 1,
    research: 2,
    scout: 5,
    harvest: 2,
    hunt: 2,
    bomb: 2,
    council: 1,
  },
  {
    abductions: 4.5,
    terror: 2,
    research: 2,
    scout: 5,
    harvest: 1,
    hunt: 3,
    bomb: 3,
    council: 1,
  },
  {
    abductions: 4,
    terror: 2,
    research: 2,
    scout: 5,
    harvest: 1,
    hunt: 3,
    bomb: 3,
    council: 1,
  },
];

const resourceLevel4 = [
  {
    abductions: 5,
    terror: 1,
    research: 3,
    scout: 5,
    harvest: 0,
    hunt: 0,
    bomb: 4,
    council: 1,
  },
  {
    abductions: 5,
    terror: 1,
    research: 3,
    scout: 5,
    harvest: 0,
    hunt: 1,
    bomb: 3,
    council: 1,
  },
  {
    abductions: 5,
    terror: 1,
    research: 3,
    scout: 5,
    harvest: 0,
    hunt: 2,
    bomb: 3,
    council: 1,
  },
  {
    abductions: 5,
    terror: 2,
    research: 3,
    scout: 5,
    harvest: 0,
    hunt: 3,
    bomb: 3,
    council: 1,
  },
  {
    abductions: 4.5,
    terror: 2,
    research: 3,
    scout: 6,
    harvest: 0,
    hunt: 4,
    bomb: 3,
    council: 1,
  },
];

export const missionArray: Array<Array<Missions>> = [
  resourceLevel0,
  resourceLevel1,
  resourceLevel2,
  resourceLevel3,
  resourceLevel4,
];
