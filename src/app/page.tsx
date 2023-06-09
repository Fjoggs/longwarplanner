"use client";

import { RemainingComponent } from "@/components/RemainingComponent";
import styles from "./page.module.scss";
import { ChangeEvent, useState } from "react";
import { MissionComponent } from "@/components/MissionComponent";

export type MissionType =
  | "abductions"
  | "terror"
  | "research"
  | "scout"
  | "harvest"
  | "hunt"
  | "bomb"
  | "council";

export type MissionStats = {
  potential: number;
  current: number;
};

type CampaignInfo = {
  year: string;
  month: string;
  alienResources: number;
  alienResearch: number;
  threatLevel: number;
};

export type State = {
  campaignInfo: CampaignInfo;
  abductions: MissionStats;
  terror: MissionStats;
  research: MissionStats;
  scout: MissionStats;
  harvest: MissionStats;
  hunt: MissionStats;
  bomb: MissionStats;
  council: MissionStats;
};

const defaultState: State = {
  campaignInfo: {
    year: "2016",
    month: "march",
    alienResources: 0,
    alienResearch: 0,
    threatLevel: 0,
  },
  abductions: {
    potential: 3.5,
    current: 0,
  },
  terror: {
    potential: 0,
    current: 0,
  },
  research: {
    potential: 3,
    current: 0,
  },
  scout: {
    potential: 3,
    current: 0,
  },
  harvest: {
    potential: 3,
    current: 0,
  },
  hunt: {
    potential: 0,
    current: 0,
  },
  bomb: {
    potential: 0,
    current: 0,
  },
  council: {
    potential: 1,
    current: 0,
  },
};

export default function Home() {
  const [state, setState] = useState<State>(defaultState);

  const onClick = (operation: "add" | "sub", id: MissionType) => {
    switch (operation) {
      case "add":
        const newValue = state[id].current + 1;
        state[id].current = newValue;
        setState(Object.assign({}, state));
        break;
      case "sub":
        if (state[id].current < 2) {
          state[id].current = 0;
          setState(Object.assign({}, state));
        } else {
          const newValue = state[id].current - 1;
          state[id].current = newValue;
          setState(Object.assign({}, state));
        }
      default:
        break;
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>, id: MissionType) => {
    state[id].current = Number(event.target.value);
    setState(Object.assign({}, state));
  };

  return (
    <main className={styles.main}>
      <div className={styles.flexRow}>
        <div className={styles.campaignInfo}>
          <h2>Campaign stats</h2>
          <div>
            <label htmlFor="year">Current year</label>
            <select
              value={state.campaignInfo.year}
              onChange={(event) => {
                state.campaignInfo.year = event.target.value;
                setState(Object.assign({}, state));
              }}
            >
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020+">2020+</option>
            </select>
          </div>
          <div>
            <label htmlFor="month">Current month</label>
            <select
              id="month"
              value={state.campaignInfo.month}
              onChange={(event) => {
                state.campaignInfo.month = event.target.value;
                setState(Object.assign({}, state));
              }}
            >
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
          <div>
            <label htmlFor="resources">Alien resources</label>
            <input
              id="resources"
              type="number"
              value={state.campaignInfo.alienResources}
              onChange={(event) => {
                state.campaignInfo.alienResources = Number(event.target.value);
                setState(Object.assign({}, state));
              }}
            />
          </div>
          <div>
            <span>Resource level</span>
            <span>{Math.floor(state.campaignInfo.alienResources / 50)}</span>
          </div>
          <div>
            <span>Meld reward</span>
            <span>{Math.floor(state.campaignInfo.alienResources / 10)}</span>
          </div>
          <div>
            <label htmlFor="research">Alien research</label>
            <input
              id="research"
              type="text"
              value={state.campaignInfo.alienResearch}
            />
          </div>
          <div>
            <label htmlFor="threat">Threat level</label>
            <input
              id="threat"
              type="text"
              value={state.campaignInfo.threatLevel}
            />
          </div>
        </div>
        <div>
          <h2>Mission table next month</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abductions</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Terror</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Research</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Scout</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Harvest</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Hunt</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Bomb</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Council</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.missionTable}>
        <h2>Mission Table</h2>
        <h3>Ground missions</h3>
        <div className={styles.grid}>
          <span>Type</span>
          <span>Potential</span>
          <span>Current</span>
          <span>Remaining</span>

          <MissionComponent
            id="abductions"
            label="Abductions"
            state={state}
            onChange={onChange}
          />

          <MissionComponent
            id="terror"
            label="Terror"
            state={state}
            onChange={onChange}
          />

          <MissionComponent
            id="council"
            label="Council"
            state={state}
            onChange={onChange}
          />
        </div>
        <h3>Airgame</h3>
        <div className={styles.grid}>
          <MissionComponent
            id="scout"
            label="Scout"
            state={state}
            onChange={onChange}
          />

          <MissionComponent
            id="hunt"
            label="Hunt"
            state={state}
            onChange={onChange}
          />

          <MissionComponent
            id="bomb"
            label="Bomb"
            state={state}
            onChange={onChange}
          />

          <MissionComponent
            id="research"
            label="Research"
            state={state}
            onChange={onChange}
          />

          <MissionComponent
            id="harvest"
            label="Harvest"
            state={state}
            onChange={onChange}
          />
        </div>
      </div>
    </main>
  );
}
