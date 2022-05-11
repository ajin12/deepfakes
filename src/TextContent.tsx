import styled from "@emotion/styled";
import React from "react";
import { Media } from "./App.tsx";

const Subtitle = styled.h3`
  font-family: "Source Code Pro", monospace;
`;

interface Props {
  setMedia: (media: Media) => void;
}

const MediaEmphasis = styled.span`
  background-color: rgba(171, 205, 239, 0.5);
  cursor: pointer;

  &:hover {
    background-color: rgba(171, 205, 239, 0.8);
  }
`;

const TextContent: React.FC<Props> = ({ setMedia }) => {
  return (
    <>
      <p>
        In late 2017, a Reddit account with the handle Deepfakes shared
        pornographic videos created using open source deep neural network
        (DNN)-based face-swapping technology, coining the term "deepfake." Since
        then, accompanying a rampant spread of online disinformation, it has
        expanded to not only refer to falsified videos where the subject is
        swapped with another person's likeness, but to any AI-generated media
        intended to impersonate, whether images, audio, or videos.
      </p>
      <p>
        The fabrication and alteration of content is not a 21st century novelty.
        Ancient Romans chipped off names and portraits from stone to erase
        records of a person's existence, and{" "}
        <MediaEmphasis onClick={() => setMedia(Media.Stalin)}>
          Joseph Stalin didn't need Photoshop or DNNs to doctor photos, purging
          his political enemies from them.
        </MediaEmphasis>{" "}
        However, with the development of increasingly powerful AI technology and
        lowered barriers to accessing them, now it may only take a matter of
        minutes to churn out a highly convincing deepfake. The rapid
        dissemination of information through media and news outlets, as well as
        connectivity provided by social media platforms also makes it incredibly
        easy for deepfakes to spread like wildfire, which, when consumed by
        unknowing viewers, may bring unintended consequences.
      </p>
      —
      <p>
        While the term understandably elicits negative reactions most of the
        time, not all deepfakes are created with the intention of deceiving.
        Let's take a look at various functions deepfakes have fulfilled in the
        landscape of Internet folklore through a number of well-known examples.
      </p>
      <Subtitle>Political</Subtitle>
      <p>
        In May 2019, a fake video of{" "}
        <MediaEmphasis onClick={() => setMedia(Media.Pelosi)}>
          Nancy Pelosi slurring through a speech
        </MediaEmphasis>{" "}
        was shared extensively on Facebook and YouTube. Originally posted by a
        34-year-old sports blogger and "Trump superfan," the video was soon
        posted by Trump himself on Twitter, who captioned it, "PELOSI STAMMERS
        THROUGH NEWS CONFERENCE." By the time the video was shown to be fake, it
        had already garnered millions of views and was widely spread by Trump
        supporters to move their political agenda forward. Facebook refused to
        delete the video but stated, "Once the video was fact-checked as false,
        we dramatically reduced its distribution."
      </p>
      <p>
        In response to this incident, a team of artists shared on Instagram a
        deepfake of Mark Zuckerberg boasting that he has "total control of
        billions of people's stolen data, all their secrets, their lives, their
        futures." They wanted to make a statement "to interrogate the power of
        these new forms of computational propaganda" and test whether Facebook's
        response to this deepfake would be consistent with their response to the
        deepfake of Pelosi, considering that this particular video is harmful to
        the company's reputation. A spokesperson stated, "We will treat this
        content the same way we treat all misinformation on Instagram… If
        third-party fact-checkers mark it as false, we will filter it."
      </p>
      <Subtitle>Educational</Subtitle>
      <p>
        A team at the MIT Center for Advanced Virtuality created an art
        installation that used footage of President Nixon's resignation speech
        and the draft of an in-memoriam speech that would've been delivered if
        the Apollo 11 mission had not succeeded to generate a deepfake of Nixon
        giving the speech on air. As for the process of fabricating the video,
        the team filmed an actor reading the contingency speech, the actor's
        voice was synthesized to match President Nixon's, and Nixon's lip
        motions and his head, facial, and hand movements were modified to sync
        with what was being said. It was deliberately made with the purpose of
        educating people of the power of deepfakes, how realistic they can be,
        and their potential to convey false versions of history.
      </p>
      <Subtitle>Fraud</Subtitle>
      <p>
        While the examples of viral deepfakes above may suggest that only
        high-profile individuals like politicians or celebrities would fall
        victim to impersonation, criminals have also exploited AI technology to
        target lesser known people to commit fraud. In March 2019, the CEO of an
        energy company in the United Kingdom was demanded to transfer €220,000
        by who he thought to be his boss on the other end of the telephone. The
        CEO followed through with the request but grew suspicious after
        receiving several more calls requesting another payment. Eventually, it
        was found that criminals had used AI to generate a deepfake of the
        boss's voice. As Francesca Panetta, XR creative director at the MIT
        Center for Advanced Virtuality, remarks, "It doesn't have to be a
        politician to be a deepfake. It even might be your friend. It could be
        you that's targeted."
      </p>
      <Subtitle>Art</Subtitle>
      <p>
        Deepfakes have also been created for artistic purposes, whether it's
        Lucasfilm bringing back Peter Cushing's Grand Moff Tarkin and Carrie
        Fisher's Princess Leia in Rogue One: A Star Wars Story, or Samsung AI
        researchers generating living portraits of Marilyn Monroe, Salvador
        Dalí, and the Mona Lisa. A recent controversy surrounding the
        documentary "Roadrunner" following Anthony Bourdain's life and career
        came into the limelight when it was discovered that audio deepfakes of
        Bourdain's voice were generated without disclosure to audiences or
        explicit consent from those in Bourdain's close circles, raising
        questions about what constitutes ethical use of synthetic media.
      </p>
      <Subtitle>Amusement</Subtitle>
      <p>
        Finally, deepfakes are also created to make people laugh. A classic
        example of synthetic content generated to serve as entertainment is this
        celebrity deepfake roundtable created by Collider. In this humorous
        15-minute conversation, an imagined conversation takes place between
        deepfake likenesses of George Lucas, Robert Downey Jr., Tom Cruise, Ewan
        McGregor, and Jeff Goldblum, and they discuss the streaming wars and the
        future of cinema.
      </p>
      <p>
        While the examples above are by no means comprehensive in covering the
        different roles that deepfakes play in the context of Internet folklore,
        they capture the far-reaching societal effects deepfakes can have and
        how they can be deployed in such versatile ways.
      </p>
      —
      <p>
        A natural question that follows is how we can spot deepfakes and become
        more conscious, critical consumers of media. Unfortunately, there isn't
        a rulebook to follow that'll allow someone to detect deepfakes with
        perfect accuracy, but here are some actionable strategies that could
        help in determining whether one can believe what they see.
      </p>
      <ul>
        <li>
          <b>Pay attention to the face:</b> DNNs sometimes aren't great at
          mimicking certain facial features or behaviors realistically, whether
          it's amorphous teeth, straggling strands of hair, a lack of blinking,
          or a slight shimmer or distortion around the face.
        </li>
        <li>
          <b>Examine surroundings:</b> Fixed objects in the frame such as a lamp
          or desk may display abnormal movements in deepfakes. Also,
          strange-looking landscapes in the background or unnatural lighting
          could also be giveaways for synthetically generated content.
        </li>
        <li>
          <b>Observe edges:</b> Inconsistencies around edges can be distinct
          vestiges of a face swap, especially if they are near clothing, hair,
          or jewelry.
        </li>
        <li>
          <b>Inspect accessories and clothing:</b> Accessories, such as glasses
          and earrings, and clothing can help clue into deepfakes. DNNs fall
          short in generating intricate jewelry, as well as clothing patterns
          and textures with high fidelity.
        </li>
      </ul>
    </>
  );
};

export default TextContent;
