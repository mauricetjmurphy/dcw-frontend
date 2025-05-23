import { Box, Text, Image } from "@chakra-ui/react";
import { Border } from "../border/Border";

function BlockquoteWithImage({
  author,
  children,
  image,
}: {
  author: { name: string; role: string };
  children: React.ReactNode;
  className?: string;
  image: string;
}) {
  return (
    <Box
      as="figure"
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "center",
        columnGap: { base: 4, sm: 10, lg: 16 },
        rowGap: { base: 8, sm: 0 },
        sm: {
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "1fr auto auto 1fr",
        },
      }}
    >
      <Box
        as="blockquote"
        sx={{
          gridColumn: { base: "span 2", sm: "span 7", smStart: 6 },
          gridRow: { smStart: 2 },
          fontSize: "xl",
          lineHeight: "7",
          color: "neutral.600",
        }}
      >
        {typeof children === "string" ? (
          <Text as="p">{children}</Text>
        ) : (
          children
        )}
      </Box>
      <Box
        sx={{
          gridColumnStart: 1,
          gridRowStart: 2,
          overflow: "hidden",
          borderRadius: { base: "xl", sm: "3xl" },
          bgColor: "neutral.100",
          sm: { gridColumn: "span 5", gridRow: "span full" },
        }}
      >
        <Image
          alt=""
          src={image}
          sizes="(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem"
          sx={{
            height: { base: "12", sm: "auto" },
            width: { base: "12", sm: "full" },
            objectFit: "cover",
            filter: "grayscale(100%)",
            sm: { aspectRatio: "7 / 9" },
          }}
        />
      </Box>
      <Box
        as="figcaption"
        sx={{
          fontSize: { base: "sm", sm: "base" },
          color: "neutral.950",
          gridColumn: { sm: "span 7" },
          gridRowStart: 3,
        }}
      >
        <Text as="span" fontWeight="semibold">
          {author.name}
        </Text>
        <Text
          as="span"
          display={{ base: "none", sm: "inline" }}
          fontWeight="semibold"
        >
          ,{" "}
        </Text>
        <Text as="br" display={{ base: "block", sm: "none" }} />
        <Text as="span" fontWeight={{ sm: "semibold" }}>
          {author.role}
        </Text>
      </Box>
    </Box>
  );
}

function BlockquoteWithoutImage({
  author,
  children,
}: {
  author: { name: string; role: string };
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Border position="left" sx={{ paddingLeft: 8 }}>
      <Box as="figure" fontSize="sm">
        <Box
          as="blockquote"
          sx={{
            color: "neutral.600",
            "&>*": { position: "relative" },
            "&>:first-of-type::before": {
              content: "'“'",
              position: "absolute",
              right: "100%",
            },
            "&>:last-of-type::after": {
              content: "'”'",
            },
          }}
        >
          {typeof children === "string" ? (
            <Text as="p">{children}</Text>
          ) : (
            children
          )}
        </Box>
        <Text
          as="figcaption"
          sx={{ marginTop: 6, fontWeight: "semibold", color: "neutral.950" }}
        >
          {author.name}, {author.role}
        </Text>
      </Box>
    </Border>
  );
}

export function Blockquote(
  props:
    | React.ComponentPropsWithoutRef<typeof BlockquoteWithImage>
    | (React.ComponentPropsWithoutRef<typeof BlockquoteWithoutImage> & {
        image?: undefined;
      })
) {
  if (props.image) {
    return <BlockquoteWithImage {...props} />;
  }

  return <BlockquoteWithoutImage {...props} />;
}
