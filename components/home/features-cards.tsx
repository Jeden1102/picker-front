import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { Avatar } from "@nextui-org/avatar";
import clsx from "clsx";

function FeaturesCards() {
  const cards = [
    {
      title: "Scrape from pages",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendu possimus alias suscipit quas atque eius eum, numquam iure accusantiu consequatur.",
      img: {
        uri: "/images/feature-1.png",
        alt: "Alt image,",
      },
      classes: "md:flex-1 md:min-w-52",
    },
    {
      title: "Share with others",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendu possimus alias suscipit quas atque eius eum, numquam iure accusantiu consequatur.",
      img: {
        uri: "/images/feature-2.png",
        alt: "Alt image,",
      },
      classes: "md:w-[400px] lg:w-[540px]",
    },
    {
      title: "Wide target source",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendu possimus alias suscipit quas atque eius eum, numquam iure accusantiu consequatur.",
      chips: [".json", ".xml", "api", ".txt", ".xls"],
      classes: "md:w-[400px] lg:w-[540px]",
    },
    {
      title: "About project",
      classes: "bg-blue-600 md:flex-1 md:min-w-52",
      testimontal: {
        content:
          '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendu possimus alias suscipit quas atque eius eum, numquam iure accusantiu consequatur."',
        avatar: "/images/avatar.jpeg",
        person: "John Doe",
        position: "PageScraper CEO",
      },
    },
  ];

  return (
    <div className="mb-16 md:mb-24 flex flex-wrap gap-2 md:gap-4">
      {cards.map((card) => (
        <Card key={card.title} className={clsx(card.classes, "md:p-3")}>
          <CardBody>
            {!card.testimontal && (
              <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
            )}
            {card.description && <p>{card.description}</p>}
            {card.testimontal && (
              <>
                <Avatar src={card.testimontal.avatar} size="md" />
                <p className="my-4 text-lg text-white">
                  {card.testimontal.content}
                </p>
                <p className="text-white">{card.testimontal.person}</p>
                <p className="text-sm opacity-80 text-white">
                  {card.testimontal.position}
                </p>
              </>
            )}
            {card.img && (
              <Image
                className="mt-4 rounded-lg"
                src={card.img.uri}
                width={500}
                height={500}
                alt={card.img.alt}
              />
            )}
            {card.chips && (
              <div className="flex gap-2 flex-wrap my-4">
                {card.chips &&
                  card.chips.map((chip) => (
                    <Chip
                      key={chip}
                      color="secondary"
                      size="lg"
                      startContent={<FaCheck size={12} />}
                    >
                      {chip}
                    </Chip>
                  ))}
              </div>
            )}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default FeaturesCards;
