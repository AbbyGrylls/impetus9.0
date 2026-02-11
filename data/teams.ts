export interface TeamMember {
  name: string;
  phone: string;
  post: string;
  imgname: string;
  email: string;
  link: string;
}

export interface Team {
  teamName: string;
  slug: string;
  members: TeamMember[];
}

export interface TeamsData {
  teams: Team[];
}

export const teamsData: TeamsData = {
  teams: [
    {
      teamName: "Coordinators",
      slug: "coordinators",
      members: [
        {
          name: "Akshat Gupta",
          phone: "+91 7548071485",
          post: "Coordinator",
          imgname: "teamimages/akshat gupta.jpeg",
          email: "akshatgupta1003@gmail.com",
          link: "https://www.linkedin.com/in/akshat-gupta-816a422a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Akash S",
          phone: "+91 9444265824",
          post: "Coordinator",
          imgname: "teamimages/akashS.jpeg",
          email: "",
          link: "",
        },
        {
          name: "Shubhrajyoti Saha",
          phone: "+91 8918586396",
          post: "Joint Coordinator",
          imgname: "teamimages/subrajyoti saha.jpeg",
          email: "shubhrajyotisaha334@gmail.com",
          link: "https://www.linkedin.com/in/shubhrajyoti-saha-15952029a",
        },
        {
          name: "Bontha Likith",
          phone: "+91 8074677491",
          post: "Joint Coordinator",
          imgname: "teamimages/bontha likhith.jpeg",
          email: "",
          link: "",
        }
      ]
    },
    {
      teamName: "Finance Team",
      slug: "finance",
      members: [
        {
          name: "Ritesh Premchand Gupta",
          phone: "+91 8291164387",
          post: "Lead",
          imgname: "teamimages/ritesGupta.jpeg",
          email: "",
          link: "",
        },
        {
          name: "Varun Gautam",
          phone: "+91 9368145959",
          post: "Lead",
          imgname: "teamimages/varun gautam.jpeg",
          email: "varungautam081@gmail.com",
          link: "https://in.linkedin.com/in/varun-gautam-1205012a9"
        }

      ]
    },
    {
      teamName: "Event Management Team",
      slug: "events",
      members: [
        {
          name: "Ritesh Premchand Gupta",
          phone: "+91 8291164387",
          post: "Lead",
          imgname: "teamimages/ritesGupta.jpeg",
          email: "",
          link: "",
        },
        {
          name: "Debjit Maity",
          phone: "8167025227",
          post: "Lead",
          imgname: "teamimages/Debjit Maity.jpg",
          email: "maitydebjit27022003@gmail.com",
          link: "https://www.linkedin.com/in/debjit-maity-398069262?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        {
          name: "Diethozo jabez Vizo",
          phone: "8787805856",
          post: "Lead",
          imgname: "teamimages/Vizo.jpg",
          email: "diethozojabezvizo@gmail.com",
          link: "http://www.linkedin.com/in/diethozo-vizo"
        },
        {
          name: "Shivansh Kumar",
          phone: "",
          post: "Lead",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Diptayan Mondal ",
          phone: "6290131020",
          post: "Lead",
          imgname: "teamimages/DIPTAYAN.png",
          email: "2022meb009.diptayan@students.iiests.ac.in",
          link: "http://www.linkedin.com/in/diptayan-mondal-947923287"
        },

        {
          name: "Hariram Murmu",
          phone: "",
          post: "Lead",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Debolina Das",
          phone: "7003574001",
          post: "Lead",
          imgname: "teamimages/DEBOLINA.jpg",
          email: "2022meb029.debolina@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/debolina-das-a22715240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },

        {
          name: "Ayush Dutta",
          phone: "8972851567",
          post: "Executive",
          imgname: "teamimages/Ayush.png",
          email: "dutta7759@gmail.com",
          link: "https://www.linkedin.com/in/ayushdutta2005/"
        },
        {
          name: "Agniva Hazra",
          phone: "9749424075",
          post: "Executive",
          imgname: "teamImages/Agniva.jpg",
          email: "",
          link: "https://www.linkedin.com/in/agniva-hazra-85b4162a7/"
        },
        {
          name: "Aman Daulat Wankhede",
          phone: "7448171318",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Sachin Yadav",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Durgesh Yadav",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Swayam Gupta",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Arti Kumari",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Bikram Pal",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Pranay Dey",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Shubhankar Ghosh",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Sudeshna Hazra",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },

      ]
    },
    {
      teamName: "Web Development Team",
      slug: "web-dev",
      members: [
        {
          name: "Abhishek Kumar (absie)",
          phone: "+91 9959387572",
          post: "Lead",
          imgname: "teamimages/abhishek.jpg",
          email: "",
          link: ""
        },
        {
          name: "Mansi Mehra",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
      ]
    },
    {
      teamName: "Content & Design Team",
      slug: "design",
      members: [
        {
          name: "Kishore Pal",
          phone: "9641435117",
          post: "Lead",
          imgname: "teamimages/Kishore Pal.jpg",
          email: "kishorep994@gmail.com",
          link: "https://www.linkedin.com/in/kishorepal123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Arunabh Bagchi",
          phone: "6232089966",
          post: "Lead",
          imgname: "",
          email: "2022meb066.arunabh@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/arunabh-bagchi-94412025b"
        },
        {
          name: "Kaladhar Gopal",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Aykchat Kalita",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Avishek Pal",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Ankit Kumar",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },

      ]
    },
    {
      teamName: "Publicity Team",
      slug: "publicity",
      members: [
        {
          name: "Diethozo jabez Vizo",
          phone: "8787805856",
          post: "Lead",
          imgname: "teamimages/Vizo.jpg",
          email: "diethozojabezvizo@gmail.com",
          link: "http://www.linkedin.com/in/diethozo-vizo"
        },
        {
          name: "Abhishek Bhatt",
          phone: "6395399362",
          post: "",
          imgname: "teamimages/Abhishek Bhatt.JPG",
          email: "abhibhatt6601@gmail.com",
          link: "https://www.linkedin.com/in/abhishek-bhatt-306b28259/"
        },
        {
          name: "Aman Daulat Wankhede",
          phone: "7448171318",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Rohan Vikas Kudtudkar",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Ayush Dutta",
          phone: "8972851567",
          post: "Executive",
          imgname: "teamimages/Ayush.png",
          email: "dutta7759@gmail.com",
          link: "https://www.linkedin.com/in/ayushdutta2005/"
        },
      ]
    },
    {
      teamName: "Sponsorship Team",
      slug: "sponsorship",
      members: [
        {
          name: "Ritesh Premchand Gupta",
          phone: "+91 8291164387",
          post: "Lead",
          imgname: "teamimages/ritesGupta.jpeg",
          email: "",
          link: "",
        },
        {
          name: "Amit Kumar",
          phone: "+91 7859048392",
          post: "Lead",
          imgname: "teamimages/AMIT.jpg",
          email: "2022meb065.amit@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/amitkumar9082?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Kush Jajodia",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Rohan Kanhai",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Srishti Sanjay Pal",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
      ]
    },

    {
      teamName: "Industry Academia Meet Team",
      slug: "iam",
      members: [
        {
          name: "Saketh Manchu",
          phone: "9381457448",
          post: "Lead",
          imgname: "teamimages/Manchu Saketh.JPG",
          email: "manchusaketh123@gmail.com",
          link: "https://www.linkedin.com/in/manchu-venkata-sai-saketh-60b756256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Kishore Pal",
          phone: "9641435117",
          post: "Lead",
          imgname: "teamimages/Kishore Pal.jpg",
          email: "kishorep994@gmail.com",
          link: "https://www.linkedin.com/in/kishorepal123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Ayush Dutta",
          phone: "8972851567",
          post: "Executive",
          imgname: "teamimages/Ayush.png",
          email: "dutta7759@gmail.com",
          link: "https://www.linkedin.com/in/ayushdutta2005/"
        },
        {
          name: "Anshuman Mondal",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
      ]
    },
    {
      teamName: "Videography & Photography Team",
      slug: "media",
      members: [
        {
          name: "Aman Daulat Wankhede",
          phone: "7448171318",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Soumyadita Mondal",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
        {
          name: "Nikhil Kumar",
          phone: "",
          post: "Executive",
          imgname: "",
          email: "",
          link: ""
        },
      ]
    }
  ]
};
