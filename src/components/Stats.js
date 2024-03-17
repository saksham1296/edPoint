import { Typography, Card } from "@material-tailwind/react";

function StatsCard({ count, title, description }) {
    return (
        <Card color="transparent" shadow={false}>
            <Typography
                variant="gradient"
                className="text-4xl font-bold"
                color="blue-gray">
                {count}
            </Typography>
            <hr className="mt-2 mb-4 max-w-sm" />
            <Typography
                variant="h5"
                color="blue-gray"
                className="mt-1 font-bold">
                {title}
            </Typography>
            <Typography className="text-base max-w-xs font-normal leading-7 !text-gray-500">
                {description}
            </Typography>
        </Card>
    );
}

const stats = [
    {
        count: "15,000M",
        title: "Marathon Runner Progress",
        description: "You're racing ahead in your marathon training goals.",
    },
    {
        count: "$10,000+",
        title: "Invested",
        description: "Your financial acumen is paying off—literally.",
    },
    {
        count: "4,500+",
        title: "Hours of Exercise",
        description:
            "Your commitment to health is inspiring and your stats show it.",
    },
    {
        count: "8,200+",
        title: "Volunteer Hours",
        description:
            "Your contributions have made an impact in your community.",
    },
];

export function StatsSection8() {
    return (
        <section className="lg:py-28 py-10 px-8 container mx-auto">
            <div className="lg:mb-24 mb-10">
                <Typography
                    color="blue-gray"
                    className="mb-4 !text-2xl font-bold lg:!text-4xl">
                    Empowering Minds, Transforming Futures: Your Path to
                    Knowledge Begins Here
                </Typography>
                <Typography
                    variant="lead"
                    className="w-w-full !text-gray-500 max-w-xl">
                    we strive to empower learners of all ages and backgrounds on
                    their educational journey. Our dedicated team of educators
                    and experts curates top-notch resources and fosters a
                    supportive community to inspire growth, curiosity, and
                    lifelong learning.
                </Typography>
            </div>
            <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
                <Card
                    className="bg-gray-100/50 py-24 text-center"
                    shadow={false}>
                    <Typography
                        variant="h1"
                        className="!text-green-500 !leading-snug text-5xl">
                        1,000+
                    </Typography>
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-2 font-bold">
                        Students Connected
                    </Typography>
                    <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mt-10 font-bold">
                        No.1 Institue in Prayagraj
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mt-1 text-base mx-auto !text-gray-500 lg:w-8/12">
                        Transforming Dreams Into Reality
                    </Typography>
                </Card>
                <div>
                    <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
                        {stats.map((props, key) => (
                            <StatsCard key={key} {...props} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StatsSection8;
