import { Header } from "../components/header";
import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false, }) //server side rendering desligado

const options = {
    chart:{
        toolbar:{
            show: false,
        },
        zoom: {
            enabled: false,
        }, 
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip:{
        enabled: false,
    },
    xaxis :{
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        }
        ,
        axisTicks: {
        color: theme.colors.gray[600]
        },
        categories:[
            '2022-05-06T00:00:00.000z',
            '2022-05-07T00:00:00.000z',
            '2022-05-08T00:00:00.000z',
            '2022-05-09T00:00:00.000z',
            '2022-05-10T00:00:00.000z',
            '2022-05-11T00:00:00.000z',
        ]
    },
    fill: {
        opacity: 0.2,
        type: "gradient",
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.2,
        }

    } 

};

const series = [
    {name: 'seriesOne', data:[31, 120, 10, 28, 51, 18, 109] }
];

export default function DashBoard(){
    return(
        <Flex direction="column" h="100vh">
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
                    <Box
                      p={["6", "8"]}
                      bg="gray.800"
                      borderRadius={8}
                      pb="4"
                    >
                        <Text fontSize="lg" mb="4"> Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160}/>
                    </Box>
                    <Box
                      p={["6", "8"]}
                      bg="gray.800"
                      borderRadius={8}
                      pb="4"
                    >
                        <Text fontSize="lg" mb="4"> Taxa de Abertura </Text>
                        <Chart options={options} series={series} type="area" height={160}/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}