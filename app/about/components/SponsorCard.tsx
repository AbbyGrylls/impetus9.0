import { Box } from "@mui/system";
import Image from "next/image";

const styles = (dimmed: boolean, isDimmed: any) => ({
  height: { xs: "72px", md: "125px" }, // Reduced box height
  width: { xs: "112px", md: "200px" },   // Reduced box width
  margin: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: dimmed ? "rgba(30, 30, 30, 0.85)" : "rgba(40, 40, 40, 0.9)",
  borderRadius: "15px",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
  opacity: dimmed ? 0.5 : 1,
  overflow:"hidden",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  },
});

interface Sponsor {
  link: string;
  imgname: string;
  altText?: string; // altText is optional
}

interface SponsorCardProps {
  sponsor: Sponsor;
  isDimmed: boolean;
}

const SponsorCard = ({ sponsor, isDimmed }: SponsorCardProps) => {
  const handleClick = () => {
    if (sponsor.link) {
      window.open(sponsor.link, "_blank");
    }
  };

  return (
    <Box sx={styles(true, isDimmed)} onClick={handleClick}>
      <Image
        src={`/images/${sponsor.imgname}`}
        alt={sponsor.altText || "Sponsor logo"}
        width={200} // Increased logo width
        height={140} // Increased logo height
        style={{ objectFit: "contain", borderRadius: "10px" }}
      />
    </Box>
  );
};

export default SponsorCard;