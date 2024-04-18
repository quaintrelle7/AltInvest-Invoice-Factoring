import {useDisclosure, Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Container, Textarea} from '@chakra-ui/react'
import React, {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function ListNFTForm() {
   const { isOpen, onOpen, onClose } = useDisclosure();
    const initialFormData = {
        company: "",
		invoiceAmount: "",
		discountRate:"",
		description: ""
    }
   const [formData, setFormData] = useState({
		company: "",
		invoiceAmount: "",
		discountRate: "",
		description: "",
        invoiceDate:"",
        dueDate:"",
        billedTo:"",
        withdrawalDate: ""
	});

    const [fileData, setFileData] = useState({
        file: null});

    

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));

        console.log(formData);  
	};

	const handleFileUpload = async(e:React.FormEvent) => {
		// if (selectedFile) {
		// 	console.log("Uploading file:", selectedFile);
		// } else {
		// 	console.log("No file selected");
		// }

        e.preventDefault();
        const files = e.target;
	};

	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target && event.target.files ? event.target.files[0] : null;
		// let fileHash = await sendFileToIPFS(file);
		// console.log(fileHash);
		// setHash(fileHash);

    //     const form = event.target;
    // const files = (form[0]).files;

      if (!file ) {
      return alert("No file selected");
      
       // upload files
    //    const result = await ipfs.add(file);

    //    setFileData([
    //   ...,
    //   {
    //     cid: result.cid,
    //     path: result.path,
    //   },
    // ]);

    }

	};

	const handleRegistration = async (e: React.FormEvent) => {
		e.preventDefault();
		// const filedata = new FormData();
		// filedata.set("file", selectedFile);
		// const data = {
		// 	name: e.target.name.value,
		// 	username: e.target.username.value.toLowerCase(),
		// 	age: e.target.age.value,
		// 	address: e.target.address.value,
		// 	aadhar: e.target.aadhar.value,
		// 	pan: e.target.pan.value,
		// 	aadharHash: hash,
		// 	email: e.target.email.value,
		// 	password: e.target.password.value,
		// };
		// console.log(data);
		// const result = await axios.post("/api/registerUser", data, {
		// 	headers: { "Content-Type": "application/json" },
		// });
		// console.log(result.data);
		// setHash("");
		// onClose();
        window.alert("submitted")
        setFormData({
            ...initialFormData
        })

        onClose();
	};


  return (
    <>
      <Button colorScheme='telegram' onClick={onOpen}>List Company</Button>
     
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg= "brand.ternary" color={"brand.secondary"}>
          <ModalHeader>List Company</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <form style={{}} onSubmit={handleRegistration}>
							<label htmlFor="company">Company</label>
							<Input
								marginBottom="15px"
								marginTop="2px"
								type="text"
								name="company"
								value={formData.company}
								onChange={handleInputChange}
								required
							/>

                            <label htmlFor="billedTo">Inoice Billed To</label>
							<Input
								marginBottom="15px"
								marginTop="2px"
								type="text"
								name="billedTo"
								value={formData.billedTo}
								onChange={handleInputChange}
								required
							/>

							<label htmlFor="invoiceAmount">Amount on Invoice</label>
							<Input
								marginBottom="15px"
								marginTop="2px"
								type="number"
								name="invoiceAmount"
								value={formData.invoiceAmount}
								onChange={handleInputChange}
								required
							/>
							<label htmlFor="discountRate">Discount in percentage</label>
							<Input
								marginBottom="15px"
								marginTop="2px"
								type="number"
								name="discountRate"
								value={formData.discountRate}
								onChange={handleInputChange}
								required
							/>
                            <label htmlFor="invoiceDate">Invoice Date</label>
							<Input
								marginBottom="15px"
								marginTop="2px"
								type="text"
								name="invoiceDate"
                                placeholder='DD/MM/YYYY'
								value={formData.invoiceDate}
								onChange={handleInputChange}
								required
							/>

                            <label htmlFor="dueDate">Due Date</label>
							<Input
								marginBottom="15px"
								marginTop="2px"
								type="text"
								name="dueDate"
                                placeholder='DD/MM/YYYY'
								value={formData.dueDate}
								onChange={handleInputChange}
								required
							/>

                            <label htmlFor="withdrawalDate">Withdrawal Date</label>
							<Input
								marginBottom="15px"
								marginTop="2px"
								type="text"
								name="withdrawalDate"
                                placeholder='DD/MM/YYYY'
								value={formData.withdrawalDate}
								onChange={handleInputChange}
								required
							/>

							<label htmlFor="description">Description</label>
							<Textarea
								marginBottom="15px"
								marginTop="2px"
								name="description"
								value={formData.description}
                                onChange={handleInputChange}
                                required={true}
							/>
							
							<label>Upload Invoices</label>
							<Input
								marginBottom="15px"
								marginTop="2px"
								type="file"
								padding="1"
								onChange={handleFileChange}
							/>
							<button onClick={handleFileUpload} />
{/*                            
							<label htmlFor="walletAddress">WalletAddress</label>
							<Input
								marginBottom="15px"
								marginTop="2px"
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
							/> */}

    {/* <DatePicker  name="invoiceDate" value={formData.invoiceDate} onChange={handleInputChange} /> */}

                           <ModalFooter>
                            <Button type="submit" colorScheme='blue' mr={3}>
                              Submit
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                          </ModalFooter>
                            </form>
          </ModalBody>
        </ModalContent>

          
      </Modal>
    </>
  )
}

export default ListNFTForm


