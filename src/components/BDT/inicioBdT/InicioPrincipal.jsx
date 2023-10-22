import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
  Divider,
  SimpleGrid
} from '@chakra-ui/react';

function InicioPrincipal() {
  return (
    <Box p={6}>

      {/* Oportunidades laborales */}
      <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="sm" mb={6}>
        <Flex justifyContent="space-between">
          <Heading size="md">Oportunidades laborales</Heading>
          <Text>Hace tres semanas</Text>
        </Flex>

        <Text fontSize="xl" fontWeight="bold" mt={4}>Coordinación de rectoría</Text>
        <HStack spacing={4} mt={2}>
          <Text>💼 $15473MXN - $15473MXN Quincenal (Bruto)</Text>
          <Text>⏰ Tiempo completo (8 hrs)</Text>
        </HStack>
        <HStack spacing={4} mt={2}>
          <Text>📅 Lunes a Viernes</Text>
          <Text>📝 Contrato por tiempo indeterminado</Text>
          <Text>🏢 Presencial</Text>
        </HStack>
        <Text mt={4}>Universidad Tecnológica de León</Text>
        <Text>QNA 225 León, Guanajuato.</Text>

        <Button mt={4} colorScheme="blue">Postulado</Button>
      </Box>

      <Divider my={6} />

      {/* Explora Conecta */}
      <Heading size="md" mb={4}>Explora Conecta</Heading>
      <SimpleGrid columns={3} spacing={6}>
        <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="sm">
          <Text fontWeight="bold" mb={2}>Buscar empleo</Text>
          <Text>Hay cientos de vacantes esperándote, encuentra el trabajo que siempre deseaste</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="sm">
          <Text fontWeight="bold" mb={2}>Mis oportunidades</Text>
          <Text>Da un vistazo a las oportunidades laborales que has recibido o dales seguimiento</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="sm">
          <Text fontWeight="bold" mb={2}>Mejorar mi perfil</Text>
          <Text>Mejora tu perfil añadiendo tus certificaciones, experiencia laboral y otros datos de ti</Text>
        </Box>
      </SimpleGrid>

    </Box>
  );
};

export default InicioPrincipal;
