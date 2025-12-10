import { Typography, Box, Button } from "@mui/material";
import "./page.css";

export default function SponsorsPage() {
  return (
    <Box className="page-container">

      <Box className="section">
        <Typography variant="h4" className="sectionTitle">
          Want to Sponsor Us?
        </Typography>

        <Typography className="paragraph">
          Partnering with us at Impetus 9.0 lets you showcase your brand to
          future innovators in engineering and technology. Gain visibility,
          connect with engaged audiences, and make a memorable impact. Let’s
          build the future together.
        </Typography>

        <Button variant="contained" className="mt-3" href="">
          Download Brochure
        </Button>
      </Box>

      <Box className="section">
        <Typography variant="h4" className="sectionTitle">
          About Our College
        </Typography>

        <Typography className="paragraph">
          Founded in 1856, the Indian Institute of Engineering Science and
          Technology (IIEST), Shibpur, is India’s second oldest engineering
          college...
        </Typography>
      </Box>

      <Box className="section">
        <Typography variant="h4" className="sectionTitle">
          Sponsor Categories
        </Typography>

        <Typography className="paragraph">
          Discover a range of sponsorship opportunities tailored to maximize
          your brand’s visibility...
        </Typography>
      </Box>

    </Box>
  );
}
