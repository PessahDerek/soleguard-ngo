import {IconType} from "react-icons";

/**
 *
 * @type {{org_name: string}}
 */
interface LandingPageObj {
    headline: string;
    descriptive: string;
}

// TODO: move to main.d.ts type file
export interface VisionAndMissionObj {
    title: string;
    statement: string;
}

// TODO: move to main.d.ts type file
export interface CoreValueObj {
    value: string;
    description: string;
    image: string;
}

// TODO: move to main.d.ts type file
export interface ImpactObj {
    numbers?: number
    description: string
}

export interface PartnershipObj {
    partner: string;
    description: string;
}

export interface GetInvolvedObj {
    how: string;
    description: string;
    image: string;
    action: string;
    actionText: string;
    icon: IconType;
}

export interface ManagementObj {
    name: string;
    comment?: string;
    image: string;
    title: string;
}

export interface AreaOfFocusObj {
    [key: string]: string

    "area": string,
    "description": string,
    "image": string,
}

export interface WebDataObj {
    [key: string]: string | ManagementObj[] | LandingPageObj | AreaOfFocusObj[] | VisionAndMissionObj[] | CoreValueObj[] | ImpactObj[] | PartnershipObj[]

    "org_name": string,
    "tagline": string,
    "landing_page": LandingPageObj,
    "focus": AreaOfFocusObj[],
    "visionAndMission": VisionAndMissionObj[],
    "coreValues": CoreValueObj[]
    "impact": ImpactObj[],
    "partnerships": PartnershipObj[],
    "management": ManagementObj[],
}

export const webData: WebDataObj = {
    "org_name": "Soleguard Alliance Africa",
    "tagline": "",
    "landing_page": {
        headline: "Committed to empowering communities",
        descriptive: "Transforming lives through health, animal welfare, environmental conservation, and sustainable blue economy initiatives."
    },
    "focus": [
        {
            "area": "Animal health",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, turpis vel tincidunt tincidunt, libero massa tincidunt sapien, sed tincidunt sapien sapien eu nisi.",
            "image": "animal.svg"
        },
        {
            "area": "Environmental conservation",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, turpis vel tincidunt tincidunt, libero massa tincidunt sapien, sed tincidunt sapien sapien eu nisi.",
            "image": "environment.svg"
        },
        {
            "area": "Blue economy",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, turpis vel tincidunt tincidunt, libero massa tincidunt sapien, sed tincidunt sapien sapien eu nisi.",
            "image": "blue-economy.svg"
        },
        {
            "area": "Jiggers eradication",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, turpis vel tincidunt tincidunt, libero massa tincidunt sapien, sed tincidunt sapien sapien eu nisi.",
            "image": "jiggers.svg"
        },
    ],
    "visionAndMission": [
        {
            title: "Mission statement",
            statement: "To empower communities by addressing jigger infestations, promoting animal welfare, fostering environmental conservation, and advancing the blue economy. Soleguard Alliance strives to create lasting, community-driven solutions that improve health, well-being, and resilience, ensuring sustainable futures for communities across Kenya and beyond."
        },
        {
            title: "Vision Statement",
            statement: "We envision a future where communities thrive in health, prosperity, and environmental harmony. Our goal is to empower individuals and groups with the knowledge and resources to: \n" +
                "Eradicate jigger infestations, \n" +
                "Ensure animal welfare, \n" +
                "Protect the environment, and \n" +
                "Sustainably harness the potential of the blue economy."
        }
    ],
    "coreValues": [
        {
            value: "Community empowerment",
            description: "We believe in the power of local communities to lead change.",
            image: "/pics/community.svg"
        },
        {
            value: "Sustainability",
            description: "Our solutions are designed to last, ensuring long-term impact on public health, animal welfare, environmental conservation, and economic prosperity.",
            image: "/pics/sustainable.svg"
        },
        {
            value: "Collaboration",
            description: "We partner with governments, NGOs, and local organizations to maximize our reach and effectiveness. ",
            image: "/pics/collaboration.svg"
        },
        {
            value: "Integrity",
            description: "We are transparent in our operations and maintain the highest ethical standards.",
            image: "/pics/integrity.svg"
        },
        {
            value: "Innovation",
            description: "We continuously seek new and better ways to address the challenges facing communities. ",
            image: "/pics/innovation.svg"
        },
    ],
    "impact": [
        {
            numbers: 10000,
            description: "Individuals through its jigger eradication and public health campaigns"
        },
        {
            numbers: 50000,
            description: "Trees in community-led reforestation projects."
        },
        {
            description: "Supported coastal communities in launching sustainable blue economy initiatives, providing alternative livelihoods and protecting marine resources. "
        },
        {
            description: "Rescued and rehabilitated hundreds of animals through its veterinary services and animal rescue programs. "
        },
    ],
    "partnerships": [
        {
            partner: "Local communities",
            description: "The heart of our interventions, engaging directly with community members to ensure their participation and leadership."
        },
        {
            partner: "Government agencies",
            description: "Collaborating with local and national authorities to support policy development and align efforts with public health, environmental, and economic goals. "
        },
        {
            partner: "Non-governmental Organizations (NGOs)",
            description: "Partnering with other NGOs to share resources, expertise, and knowledge."
        },
        {
            partner: "International organizations",
            description: "Collaborating with global partners to leverage best practices and access funding opportunities."
        },
        {
            partner: "Private sector",
            description: " Collaborating with global partners to leverage best practices and access funding opportunities."
        },
    ],
    "management": [
        {
            name: "Kevin Kirimi",
            title: "Managing director",
            comment: "Soleguard Alliance is a Kenyan-based non-governmental organization welfare, fostering environmental",
            image: ""
        },
        {
            name: "David Kavunja",
            title: "Program manager",
            comment: "Soleguard Alliance is a Kenyan-based non-governmental organization welfare, fostering environmental",
            image: "",
        },
        {
            name: "Daniel Okumu",
            title: "Program manager",
            comment: "Soleguard Alliance is a Kenyan-based non-governmental organization welfare, fostering environmental",
            image: "",
        },
        {
            name: "Irungu Pamela",
            title: "Program manager",
            comment: "Soleguard Alliance is a Kenyan-based non-governmental organization welfare, fostering environmental",
            image: "",
        },
        {
            name: "Brian Nyongesa",
            title: "Communication",
            comment: "Soleguard Alliance is a Kenyan-based non-governmental organization welfare, fostering environmental",
            image: "",
        },
    ]
}