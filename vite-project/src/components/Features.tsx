import React from "react"
import {HStack, Icon, Text, StackProps, Box} from "@chakra-ui/react"
import { HassleFree, MoneyBackGuarantee, MonthlySubscription } from "../icons/Icon";

interface FeatureProps extends StackProps {
    icon: ElementType;
}

function Feature(props: FeatureProps) {
    const {icon, children, ...rest} = props;
    return (
        <HStack {...rest} spacing="24px">
            <Icon as={icon} w="48px" />
            <Text textAlign="left" fontSize="18px" fontWeight="600">{children}</Text>
        </HStack>
    )
}

export function Features() {
    return (
        <Box maxW="1024px" m="auto" pt="60px" pb="32px">
            <HStack wrap={["wrap", "wrap", "nowrap"]} justifyContent={["left", "left", "center"]} gap="30px" px={[ "50px", "50px", "48px"]} spacing={["0", "0", "100px"]}>
                <Feature icon={MoneyBackGuarantee}>
                30 days money back guarantee
                </Feature>
                <Feature icon={HassleFree}>
                No setup fees 100% hassle-free
                </Feature>
                <Feature icon={MonthlySubscription}>
                No monthly subscription Pay once and for all
                </Feature>
            </HStack>
        </Box>
    )
}
