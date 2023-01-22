import React from "react"
import {Box, Button, Flex, Heading, Text, HStack, Icon, StackProps, Stack} from "@chakra-ui/react"
import { CheckIcon } from "../icons/Icon"

export const ListItem = (props: StackProps) => {
    const {children, ...rest} = props;
    return (
        <HStack as="li" spacing="20px" {...rest}>
            <Icon as ={CheckIcon} w="22px" h="22px" />
            <Text>{children}</Text>
        </HStack>
    )
}

export function Pricing() {
    return (
        <Box maxW={994} margin={[ "-256px 24px 0", "-256px 24px 0", "-256px auto 0"]} bg="#fff" borderRadius={12} overflow="hidden" 
        boxShadow="0px 10px 10px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)">
            <Flex direction={["column", "column", "row"]}>
                <Box bg="#F0EAFB" p="60px" textAlign="center">
                    <Text fontSize={24} fontWeight="700">Premium PRO</Text>
                    <Heading as="h3" fontSize={60} mt="16px" >$329</Heading>
                    <Text color="#171923" fontSize={18} fontWeight="500" mt="8px">billed just once</Text>
                    <Button colorScheme="purple" size="lg" w="282px" mt="24px">Get Started</Button>
                </Box>
                <Box p={[ "60px 30px", "60px 30px", "60px"]} fontSize={18}>
                    <Text>
                        Access these features when you get this pricing package for your business.
                    </Text>
                    <Stack as="ul" spacing="20px" pt="24px">
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}