import { Container, Heading, Input, VStack,Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useColorModeValue } from "../components/ui/color-mode";
import {useProductStore} from "../store/product"
import { Toaster,toaster } from "../components/ui/toaster"

export const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore()

  const handleAddProduct = async() =>{
    const {success,message} = await createProduct(newProduct)
    console.log('success: ', success);
    if(!success){
      toaster.create({
        title: "Error",
        description: message,
      })
    }else{
      console.log(message);
      toaster.create({
        title: "Success",
        description: message,
      })
    }
  }

  return (
    <Container maxW={"container.sm"}>
      <Toaster />
      <VStack>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={"8"}>
          Create New Product
        </Heading>
        <Box
          w={'50%'}
          bg={useColorModeValue("white", "black")}
          p={10}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack gap={30}>
            <Input
              placeholder="Name:"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price:"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image:"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button colorScheme={'blue'} onClick={handleAddProduct} w={'full'}>
              Add Produt
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
