import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
    return (
        <Carousel>
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                            JEE Mains/Advance 2024
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80">
                            <p>
                                Unlock Your Potential: Excel in JEE Mains with
                                Education Point
                            </p>
                            <p>
                                Transforming Dreams into Reality: Master JEE
                                Mains with Best Classes
                            </p>
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                            JEE Mains/Advance 2024
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80">
                            <p>
                                Unlock Your Potential: Excel in JEE Mains with
                                Education Point
                            </p>
                            <p>
                                Transforming Dreams into Reality: Master JEE
                                Mains with Best Classes
                            </p>
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                            JEE Mains/Advance 2024
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80">
                            <p>
                                Unlock Your Potential: Excel in JEE Mains with
                                Education Point
                            </p>
                            <p>
                                Transforming Dreams into Reality: Master JEE
                                Mains with Best Classes
                            </p>
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}
