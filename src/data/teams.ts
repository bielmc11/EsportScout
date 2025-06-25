import { teamData } from "@/types/types";

export const teamPlayers: Record<string, teamData> = {
  Koi: {
    mainColor: "",
    secondaryColor: "",
    players: {
      Myrwin: "efefwfwfwfe",
      Elyoya: "dwwdqdwd",
      Jojopiun: "dwqdqdqwdqwdqwd",
      Alvaro: "dwdqwqdqwd",
      Supa: "wdqwdqwdqwd",
    },
    cc: ["Mellado", "Skain"],
  },
};

export const validTeams = Object.keys(teamPlayers);
