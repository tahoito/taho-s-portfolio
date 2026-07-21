import history2008 from "../assets/images/history/2008.jpg";
import history2018 from "../assets/images/history/2008.jpg";
import history2023 from "../assets/images/history/2023.png";
import history2025 from "../assets/images/history/2023.png";
import history2026 from "../assets/images/history/2023.png";

interface HistoryTranslations {
  title_2008: string;
  description_2008: string[];

  title_2018: string;
  description_2018: string[];

  title_2023: string;
  description_2023: string[];

  title_2025: string;
  description_2025: string[];

  title_2026: string;
  description_2026: string[];
}

export const getHistories = (history: HistoryTranslations) => {
  return [
    {
      year: "2008〜",
      title: history.title_2008,
      description: history.description_2008,
      image: history2008,
    },
    {
      year: "2018〜",
      title: history.title_2018,
      description: history.description_2018,
      image: history2018,
    },
    {
      year: "2023〜",
      title: history.title_2023,
      description: history.description_2023,
      image: history2023,
    },
    {
      year: "2025〜",
      title: history.title_2025,
      description: history.description_2025,
      image: history2025,
    },
    {
      year: "2026〜",
      title: history.title_2026,
      description: history.description_2026,
      image: history2026,
    },
  ];
};