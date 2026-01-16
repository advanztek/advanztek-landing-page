export interface AboutSlide {
    id: number;
    category: string;
    content: React.ReactNode;
}

export interface AboutProps {
    initialSlide?: number;
}

export const companyValues = [
    { icon: 'Heart', label: 'Faith in God', bgColor: '#020066', color: '#fff' },
    { icon: 'TrendingUp', label: 'Empowerment', bgColor: '#00D1FF', color: '#020066' },
    { icon: 'Shield', label: 'Integrity', bgColor: '#020066', color: '#fff' },
    { icon: 'Award', label: 'Excellence', bgColor: '#00D1FF', color: '#020066' }
];

export const leadershipRoles = [
    {
        icon: 'Users',
        bgColor: '#020066',
        iconColor: '#fff',
        title: 'Chief Executive Officer',
        description: 'Provides ultimate authority over strategic, financial, and operational decisions. Sets organizational vision and oversees all subsidiaries with faith-driven leadership.',
        hoverBorderColor: '#020066'
    },
    {
        icon: 'Target',
        bgColor: '#00D1FF',
        iconColor: '#020066',
        title: 'IT Manager',
        description: 'Oversees all technology operations, coordinates technical teams, and ensures delivery of cutting-edge solutions across frontend and backend departments.',
        hoverBorderColor: '#00D1FF'
    },
    {
        icon: 'Code',
        bgColor: '#020066',
        iconColor: '#fff',
        title: 'Team Leads',
        description: 'Frontend and Backend Team Leads coordinate development tasks, mentor developers, and ensure adherence to coding standards and best practices.',
        hoverBorderColor: '#020066'
    }
];

export const methodologyItems = [
    {
        icon: 'CheckCircle',
        bgColor: '#020066',
        iconColor: '#fff',
        title: 'Quality & Compliance',
        description: 'Adherence to industry standards, regulatory requirements, and ethical practices rooted in integrity and biblical principles.'
    },
    {
        icon: 'Lightbulb',
        bgColor: '#00D1FF',
        iconColor: '#020066',
        title: 'Innovation & Excellence',
        description: 'Continuous improvement through technology, training, and faith-driven innovation that transforms lives and communities.'
    },
    {
        icon: 'Layers',
        bgColor: '#020066',
        iconColor: '#fff',
        title: 'Client Engagement Process',
        description: 'Collaborative approach with clients, ensuring their needs are met through transparent communication, teamwork, and service excellence.'
    }
];