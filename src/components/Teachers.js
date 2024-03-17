import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

export function ProfileCard() {
    return (
        <div className="p-6">
            <p className="flex justify-center text-4xl p-5 underline">
                Teachers
            </p>
            <div className="flex flex-wrap justify-center">
                <Card className="w-96 p-3 m-3">
                    <CardHeader floated={false} className="h-80">
                        <img
                            src="https://docs.material-tailwind.com/img/team-3.jpg"
                            alt="profile-picture"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography
                            variant="h4"
                            color="blue-gray"
                            className="mb-2">
                            Natalie Paisley
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="font-medium"
                            textGradient>
                            CEO / Co-Founder
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                        <Tooltip content="Like">
                            <Typography
                                as="a"
                                href="#facebook"
                                variant="lead"
                                color="blue"
                                textGradient>
                                <i className="fab fa-facebook" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#twitter"
                                variant="lead"
                                color="light-blue"
                                textGradient>
                                <i className="fab fa-twitter" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#instagram"
                                variant="lead"
                                color="purple"
                                textGradient>
                                <i className="fab fa-instagram" />
                            </Typography>
                        </Tooltip>
                    </CardFooter>
                </Card>
                <Card className="w-96 p-3 m-3">
                    <CardHeader floated={false} className="h-80">
                        <img
                            src="https://docs.material-tailwind.com/img/team-3.jpg"
                            alt="profile-picture"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography
                            variant="h4"
                            color="blue-gray"
                            className="mb-2">
                            Natalie Paisley
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="font-medium"
                            textGradient>
                            CEO / Co-Founder
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                        <Tooltip content="Like">
                            <Typography
                                as="a"
                                href="#facebook"
                                variant="lead"
                                color="blue"
                                textGradient>
                                <i className="fab fa-facebook" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#twitter"
                                variant="lead"
                                color="light-blue"
                                textGradient>
                                <i className="fab fa-twitter" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#instagram"
                                variant="lead"
                                color="purple"
                                textGradient>
                                <i className="fab fa-instagram" />
                            </Typography>
                        </Tooltip>
                    </CardFooter>
                </Card>
                <Card className="w-96 p-3 m-3">
                    <CardHeader floated={false} className="h-80">
                        <img
                            src="https://docs.material-tailwind.com/img/team-3.jpg"
                            alt="profile-picture"
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography
                            variant="h4"
                            color="blue-gray"
                            className="mb-2">
                            Natalie Paisley
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="font-medium"
                            textGradient>
                            CEO / Co-Founder
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                        <Tooltip content="Like">
                            <Typography
                                as="a"
                                href="#facebook"
                                variant="lead"
                                color="blue"
                                textGradient>
                                <i className="fab fa-facebook" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#twitter"
                                variant="lead"
                                color="light-blue"
                                textGradient>
                                <i className="fab fa-twitter" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#instagram"
                                variant="lead"
                                color="purple"
                                textGradient>
                                <i className="fab fa-instagram" />
                            </Typography>
                        </Tooltip>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
