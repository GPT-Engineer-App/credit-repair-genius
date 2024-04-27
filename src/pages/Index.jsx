import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");
  const toast = useToast();

  const generateLetter = () => {
    if (!name || !address || !details) {
      toast({
        title: "Error",
        description: "Please fill all fields to generate the letter.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const letter = `
      [Your Name]
      [Your Address]
      [City, State, Zip Code]

      [Date]

      [Credit Bureau Name]
      [Credit Bureau Address]
      [City, State, Zip Code]

      Dear [Credit Bureau],

      I am writing to dispute the following information in my file. I have circled the items I dispute on the attached copy of the report I received.

      This item [identify item(s) disputed by name of source, such as creditors or tax court, and identify type of item, such as credit account, judgment, etc.] is (inaccurate or incomplete) because [describe what is inaccurate or incomplete and why]. I am requesting that the item be removed [or request another specific change] to correct the information.

      Enclosed are copies of [use this sentence if applicable and describe any enclosed documentation, such as payment records, court documents] supporting my position. Please reinvestigate this [these] matter[s] and [delete or correct] the disputed item[s] as soon as possible.

      Sincerely,

      [Your Name]
    `;

    toast({
      title: "Letter Generated",
      description: "Your dispute letter has been generated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Normally you would handle the letter data further, e.g., sending it to a server or outputting it to a user.
    console.log(letter);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Credit Repair Dispute Letter Generator
        </Heading>
        <Text>Fill in the details below to generate your dispute letter.</Text>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Your Name</FormLabel>
          <Input id="name" placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="address">Your Address</FormLabel>
          <Input id="address" placeholder="123 Main St" onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="details">Details of Dispute</FormLabel>
          <Textarea id="details" placeholder="Details about the inaccurate information..." onChange={(e) => setDetails(e.target.value)} />
        </FormControl>
        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" onClick={generateLetter}>
          Generate Letter
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
