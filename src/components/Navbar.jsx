
import { ReactNode } from 'react';
import { Link } from 'react-scroll';
import Resume from "./Resume.pdf"
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navCont = [{ to: "homeID", text: "HOME", id: 1 }, { to: "aboutID", text: "ABOUT", id: 2 },
    { to: "skillsID", text: "SKILLS", id: 3 }, { to: "projectsID", text: "PROJECTS", id: 4 },
    { to: "contactID", text: "CONTACT", id: 5 }, { to: "githubID", text: "GITHUB", id: 6 }];
    
    const handleOpenAndDownlaodResume = () => {
        window.open(`${Resume}`,"_blank");
    };
    return (
        <>

            <Box className='navbar' bg={useColorModeValue('blue.300', 'blue.300')} position={"fixed"} top={"0px"} width={"100%"} zIndex={"10"} px={4} color={"black"}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize={"25px"} />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        variant={"unstyled"}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box fontSize={"20px"} fontWeight={"bold"}>Rittik Haldar</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                            fontWeight={"semibold"}
                            gap={"15px"}
                        >
                            {navCont.map((ele) => (
                                <Link style={{ cursor: "pointer" }} key={ele.id} to={ele.to} spy={true} smooth={true} >{ele.text}</Link>
                            ))}
                            <a
                                href={Resume}
                                download="fw19_0770_Rittik_Haldar_Resume"
                                onClick={handleOpenAndDownlaodResume}
                            >
                                RESUME
                            </a>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'md'}
                                    marginRight={"5px"}
                                    src={
                                        'https://avatars.githubusercontent.com/u/105980445?v=4'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <a href="https://www.linkedin.com/in/rittik-haldar/" target={"_blank"}> <MenuItem style={{color:"black"}}>Linkdin</MenuItem></a>
                                <a href="https://github.com/rittik24" target={"_blank"}><MenuItem style={{color:"black"}}>GitHub</MenuItem></a>
                                <MenuDivider />
                                <a target="_blank" href="mailto:rttkhaldar@gmail.com"> <MenuItem style={{color:"black"}}>rttkhaldar@gmail.com</MenuItem> </a>
                                <MenuItem style={{color:"black"}}>7029358074</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {navCont.map((ele) => (
                                <Link style={{ cursor: "pointer" }} key={ele.id} to={ele.to} spy={true} smooth={true} onClick={()=>onClose()}>{ele.text}</Link>
                            ))}
                            <a
                                href={Resume}
                                download="fw19_0770_Ritik_Haldar_Resume"
                                onClick={handleOpenAndDownlaodResume}
                            >
                                RESUME
                            </a>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}