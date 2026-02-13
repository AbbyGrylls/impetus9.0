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
          imgname: "teamimages/Akash.jpeg",
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
          name: "Bontha Likhith",
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
          imgname: "teamimages/Ritesh.jpeg",
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
          phone: "+91 82911 64387",
          post: "Lead",
          imgname: "teamimages/Ritesh.jpeg",
          email: "",
          link: "",
        },
        {
          name: "Debjit Maity",
          phone: "+91 81670 25227",
          post: "Lead",
          imgname: "teamimages/Debjit Maity.jpg",
          email: "maitydebjit27022003@gmail.com",
          link: "https://www.linkedin.com/in/debjit-maity-398069262?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        {
          name: "Diethozo jabez Vizo",
          phone: "=91 87878 05856",
          post: "Lead",
          imgname: "teamimages/Vizo.jpg",
          email: "diethozojabezvizo@gmail.com",
          link: "http://www.linkedin.com/in/diethozo-vizo"
        },
        {
          name: "Shivansh Kumar",
          phone: "+91 8545898275",
          post: "Lead",
          imgname: "teamImages/Shivansh.jpeg",
          email: "ajaykumar8545898275@gmail.com",
          link: "https://www.linkedin.com/in/shivansh-kumar-02652b292?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        {
          name: "Diptayan Mondal ",
          phone: "+91 62901 31020",
          post: "Lead",
          imgname: "teamimages/DIPTAYAN.png",
          email: "2022meb009.diptayan@students.iiests.ac.in",
          link: "http://www.linkedin.com/in/diptayan-mondal-947923287"
        },

        {
          name: "Hariram Murmu",
          phone: "",
          post: "Lead",
          imgname: "teamImages/Xyz.png",
          email: "",
          link: ""
        },
        {
          name: "Debolina Das",
          phone: "+91 70035 74001",
          post: "Lead",
          imgname: "teamimages/DEBOLINA.jpg",
          email: "2022meb029.debolina@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/debolina-das-a22715240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },

        {
          name: "Rajdeep Sarkar",
          phone: "+91 7980430746",
          post: "Lead",
          imgname: "teamImages/Rajdeep.jpeg",
          email: "2022MEB035.rajdeep@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/rajdeep-sarkar-1403b6257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },

        {
          name: "Sreejani Mukherjee",
          phone: "+91 70444 42412",
          post: "Lead",
          imgname: "teamimages/Sreejani.jpg",
          email: "2022meb008.sreejani@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/sreejani-mukherjee-01539a2b8"
        },

        {
          name: "Ayush Dutta",
          phone: "+91 89728 51567",
          post: "Executive",
          imgname: "teamimages/Ayush.png",
          email: "dutta7759@gmail.com",
          link: "https://www.linkedin.com/in/ayushdutta2005/"
        },
        {
          name: "Agniva Hazra",
          phone: "+91 97494 24075",
          post: "Executive",
          imgname: "teamimages/Agniva.jpg",
          email: "hazrasayan007@gmail.com",
          link: "https://www.linkedin.com/in/agniva-hazra-85b4162a7/"
        },
        {
          name: "Aman Daulat Wankhede",
          phone: "+91 74481 71318",
          post: "Executive",
          imgname: "teamimages/Aman.jpeg",
          email: "amanwankhede2004@gmail.com",
          link: "linkedin.com/in/amanwankhede2004"
        },
        {
          name: "Sachin Yadav",
          phone: "+91 91152 40787",
          post: "Executive",
          imgname: "teamimages/Sachin.jpeg",
          email: "sy806162@gmail.com",
          link: "www.linkedin.com/in/sachin-yadav-1413b625a"
        },
        {
          name: "Durgesh Yadav",
          phone: "+91 95324 51365",
          post: "Executive",
          imgname: "teamimages/durgesh.jpeg",
          email: "durgesh20041@gmail.com",
          link: "https://www.linkedin.com/in/durgesh-yadav-298681289"

        },
        {
          name: "Swayam Gupta",
          phone: "+91 79858 73384",
          post: "Executive",
          imgname: "teamimages/swayam.jpeg",
          email: "swayamgupta2764@gmail.com",
          link: "https://www.linkedin.com/in/swayam-gupta-0a4483255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

        },
        {
          name: "Arti Kumari",
          phone: "=91 89358 10804",
          post: "Executive",
          imgname: "teamimages/Arti.jpeg",
          email: "artikumari40503@gmail.com",
          link: "https://www.linkedin.com/in/arti-kumari-313679340"
        },
        {
          name: "Mansi Mehra",
          phone: "+91 93685 50521",
          post: "Executive",
          imgname: "teamimages/Mansi.jpeg",
          email: "mansi2004mehra18@gmail.com",
          link: "https://www.linkedin.com/in/mansi-mehra-65325738a/"
        },
        {
          name: "Bikram Pal",
          phone: "+91 62969 91941",
          post: "Executive",
          imgname: "teamimages/Bikram.jpeg",
          email: "bikrampal068@gmail.com",
          link: "https://www.linkedin.com/in/bikram-iiest?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        {
          name: "Pranay Dey",
          phone: "+91 78648 75402",
          post: "Executive",
          imgname: "teamimages/Pranay.jpeg",
          email: "mrdey9911@gmail.com",
          link: "https://www.linkedin.com/in/pranay-dey-8888762b5?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        {
          name: "Shubhankar Ghosh",
          phone: "+91 98830 80373",
          post: "Executive",
          imgname: "teamimages/Shubhankar.jpeg",
          email: "shubhankarghosh908@gmail.com",
          link: "https://www.linkedin.com/in/shubhankar-ghosh-a253102b3"
        },
        {
          name: "Sudeshna Hazra",
          phone: "+91 7583980171",
          post: "Executive",
          imgname: "teamimages/Sudeshna.jpeg",
          email: "hazrasudeshna7@gmail.com ",
          link: "https://www.linkedin.com/in/sudeshna21"
        },
        {
          name: "Swapnanil Mukherjee",
          phone: "+91 8274852004",
          post: "Executive",
          imgname: "teamimages/Swapnil.jpeg",
          email: "swapnanilmukherjee3@gmail.com",
          link: ""
        },
        {
          name: "Kanakam Jitendra Kumar",
          phone: "+91 6300651164",
          post: "Executive",
          imgname: "teamimages/Jitendra.jpeg",
          email: "jitendrakumar081105@gmail.com",
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
          phone: "+91 99593 87572",
          post: "Lead",
          imgname: "teamimages/absie.jpeg",
          email: "",
          link: ""
        },
        {
          name: "Mansi Mehra",
          phone: "+91 93685 50521",
          post: "Executive",
          imgname: "teamimages/Mansi.jpeg",
          email: "mansi2004mehra18@gmail.com",
          link: "https://www.linkedin.com/in/mansi-mehra-65325738a/"
        },
      ]
    },
    {
      teamName: "Content & Design Team",
      slug: "design",
      members: [
        {
          name: "Kishore Pal",
          phone: "+91 96414 35117",
          post: "Lead",
          imgname: "teamimages/Kishore Pal.jpg",
          email: "kishorep994@gmail.com",
          link: "https://www.linkedin.com/in/kishorepal123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Arunabh Bagchi",
          phone: "+91 62320 89966",
          post: "Lead",
          imgname: "teamimages/Arunabh.jpg",
          email: "2022meb066.arunabh@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/arunabh-bagchi-94412025b"
        },
        {
          name: "Kaladhar Gopal",
          phone: "+91 93014 95160",
          post: "Executive",
          imgname: "teamimages/KaladharGopalPhoto.png",
          email: "kaladhargopal@gmail.com",
          link: "https://www.linkedin.com/in/kaladhar-gopal-9490bb265/"
        },
        {
          name: "Aykchat Kalita",
          phone: "+91 60010 11665",
          post: "Executive",
          imgname: "teamimages/Aykchat.jpeg",
          email: "aykchatkalita@gmail.com",
          link: "https://www.linkedin.com/in/aykchat-kalita-2a754428a/"
        },
        {
          name: "Avishek Pal",
          phone: "+91 98320 61992",
          post: "Executive",
          imgname: "teamimages/Avishek.jpeg",
          email: "apal50279@gmail.com",
          link: "https://www.linkedin.com/in/avishekpal678?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        },
        {
          name: "Ankit Kumar",
          phone: "+91 80038 64485",
          post: "Executive",
          imgname: "teamimages/Ankit.jpeg",
          email: "ankitkumarmishra0917@gmail.com",
          link: "https://www.linkedin.com/in/ankit-kumar-042878292"
        },

      ]
    },
    {
      teamName: "Publicity Team",
      slug: "publicity",
      members: [
        {
          name: "Diethozo jabez Vizo",
          phone: "+91 87878 05856",
          post: "Lead",
          imgname: "teamimages/Vizo.jpg",
          email: "diethozojabezvizo@gmail.com",
          link: "http://www.linkedin.com/in/diethozo-vizo"
        },
        {
          name: "Abhishek Bhatt",
          phone: "+91 63953 99362",
          post: "Lead",
          imgname: "teamimages/Abhishek Bhatt.JPG",
          email: "abhibhatt6601@gmail.com",
          link: "https://www.linkedin.com/in/abhishek-bhatt-306b28259/"
        },
        {
          name: "Aman Daulat Wankhede",
          phone: "+91 74481 71318",
          post: "Executive",
          imgname: "teamimages/Aman.jpeg",
          email: "amanwankhede2004@gmail.com",
          link: "linkedin.com/in/amanwankhede2004"
        },
        {
          name: "Rohan Vikas Kudtudkar",
          phone: "+91 93212 34034",
          post: "Executive",
          imgname: "teamimages/Rohan.jpeg",
          email: "rohan.kudtudkar30@gmail.com",
          link: "https://www.linkedin.com/in/rohan-kudtudkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Ayush Dutta",
          phone: "+91 89728 51567",
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
          phone: "+91 82911 64387",
          post: "Lead",
          imgname: "teamimages/Ritesh.jpeg",
          email: "",
          link: "",
        },
        {
          name: "Amit Kumar",
          phone: "+91 78590 48392",
          post: "Lead",
          imgname: "teamimages/AMIT.jpg",
          email: "2022meb065.amit@students.iiests.ac.in",
          link: "https://www.linkedin.com/in/amitkumar9082?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Kush Jajodia",
          phone: "+91 78469 93636",
          post: "Executive",
          imgname: "teamimages/Kush.jpeg",
          email: "kushjajodia2005@gmail.com",
          link: "https://www.linkedin.com/in/kushjajodia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Rohan Kanhai",
          phone: "+91 96793 78342",
          post: "Executive",
          imgname: "teamimages/RohanKanhai.jpeg",
          email: "rohankanhaiya1929@gmail.com",
          link: "https://in.linkedin.com/in/rohan-kanhai-59786b277"
        },
        {
          name: "Srishti Sanjay Pal",
          phone: "+91 89005 40369",
          post: "Executive",
          imgname: "teamimages/Shrishti.jpeg",
          email: "srishtipal29@gmail.com",
          link: "https://www.linkedin.com/in/srishti-sanjay-pal-8179172a5"
        },
      ]
    },

    {
      teamName: "Industry Academia Meet Team",
      slug: "iam",
      members: [
        {
          name: "Saketh Manchu",
          phone: "+91 93814 57448",
          post: "Lead",
          imgname: "teamimages/Manchu Saketh.JPG",
          email: "manchusaketh123@gmail.com",
          link: "https://www.linkedin.com/in/manchu-venkata-sai-saketh-60b756256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Kishore Pal",
          phone: "+91 96414 35117",
          post: "Lead",
          imgname: "teamimages/Kishore Pal.jpg",
          email: "kishorep994@gmail.com",
          link: "https://www.linkedin.com/in/kishorepal123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          name: "Anshuman Mondal",
          phone: "+91 90646 62805",
          post: "Executive",
          imgname: "teamimages/Anshuman.jpg",
          email: "anshumanmondal.official@gmail.com",
          link: "https://www.linkedin.com/in/anshumanmondal"
        },
        {
          name: "Ayush Dutta",
          phone: "+91 89728 51567",
          post: "Executive",
          imgname: "teamimages/Ayush.png",
          email: "dutta7759@gmail.com",
          link: "https://www.linkedin.com/in/ayushdutta2005/"
        },
      ]
    },
    {
      teamName: "Videography & Photography Team",
      slug: "media",
      members: [
        {
          name: "Aman Daulat Wankhede",
          phone: "+91 74481 71318",
          post: "Executive",
          imgname: "teamimages/Aman.jpeg",
          email: "amanwankhede2004@gmail.com",
          link: "linkedin.com/in/amanwankhede2004"
        },
        {
          name: "Soumyaditya Mandal",
          phone: "+91 77977 54924",
          post: "Executive",
          imgname: "teamimages/Soumyadita.jpeg",
          email: "soumyadityamandal21@gmail.com",
          link: "https://www.linkedin.com/in/soumyaditya-mandal/"
        },
        {
          name: "Nikhil Kumar",
          phone: "+91 78580 10472",
          post: "Executive",
          imgname: "teamimages/Nikhil.jpeg",
          email: "nikhil608855@gmail.com",
          link: "https://www.linkedin.com/in/nikhil-kumar2003b"
        },
      ]
    }
  ]
};
