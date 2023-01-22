import React from "react"
import {Box, Heading, Text} from "@chakra-ui/react"

export function Header() {
    return(
     <Box pb="100px" as="section">
        <Box 
        color="#F7FAFC"
        bg="#6B46C1"
        pt="40px"
        pb="198px"
        px="32px"
        textAlign={["left", "left", "center"]}
        >
            <Heading fontSize={['3xl', '3xl', '5xl']} fontWeight={[ "700", "700", "700"]}>Simple pricing for your business</Heading>
            <Text fontSize={['lg', 'lg', '2xl']} fontWeight="500" pt="16px">Plans that are carefully crafted to suit your business.</Text>
        </Box> 
     </Box>
    )
}