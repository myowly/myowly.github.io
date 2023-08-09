import { Text, Box, Image, Container } from "@chakra-ui/react";
import { useTranslations } from 'next-intl';


export default function MainMessage() {
  const t = useTranslations('Home.MainMessage');

  return (
    <Container maxWidth={[null, null, null, "1300px", "1500px"]} centerContent my="100px" px="6">
      <Box alignSelf="start" maxW={[null, null, "80%", "60%", "50%"]}>
        <Text
          color="vampire-black"
          textTransform="uppercase"
          fontWeight="normal"
          fontSize="30px"
          lineHeight="36px"
        >
          {t('texts.1.part_1')}
          <Box as="span" fontStyle='italic' fontWeight='light'>{t('texts.1.part_2')}</Box>
          {t('texts.1.part_3')}
          <Box as="span" fontWeight='bold'>{t('texts.1.part_4')}</Box>
          <Box as="span" fontWeight='extrabold' fontStyle='italic' color="fulvous">{t('texts.1.part_5')}</Box>.
        </Text>
      </Box>
      <Box alignSelf='start' my="12">
        <Image src="/Cristals_2b.png" maxH="50px" alt="" />
      </Box>
      <Box alignSelf='center' my="50px" mx={["18"]} >
        <Text
          color="vampire-black"
          textTransform="uppercase"
          fontWeight="normal"
          fontSize="30px"
          lineHeight="36px"
          textAlign="center"
        >
          <Box as="span" fontWeight='bold'>{t('texts.2.part_1')}</Box>
          {t('texts.2.part_2')}
          <Box as="span" fontWeight='extrabold' color="keppel">{t('texts.2.part_3')}</Box>.
        </Text>
      </Box>
      <Box alignSelf='end' my="12" >
        <Image src="/Cristals_2b.png" maxH="50px" alt="" />
      </Box>
      <Box alignSelf='end' maxW={[null, null, "80%", "60%", "50%"]} >
        <Text
          color="vampire-black"
          textTransform="uppercase"
          fontWeight="normal"
          fontSize="30px"
          lineHeight="30px"
          textAlign="right"
        >
          {t('texts.3.part_1')}
          <Box as="span" fontStyle='italic' fontWeight='extrabold' color="fulvous">{t('texts.3.part_2')}</Box>
          {t('texts.3.part_3')}
          <Box as="span" fontStyle='italic' fontWeight='extrabold' color="spanish-orange">{t('texts.3.part_4')}</Box>
          <Box as="span" fontWeight='bold'>{t('texts.3.part_5')}</Box>
          {t('texts.3.part_6')}
          <Box as="span" fontWeight='bold'>{t('texts.3.part_7')}</Box>.
        </Text>
      </Box>
    </Container>
  )
}
