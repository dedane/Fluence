import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Container,
  Avatar,
  Checkbox,
  Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';






function PickInfluencer() {
 

  const socialMediaData = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://ik.imagekit.io/ugyodiq15/Rectangle_12_h713lDXsL.png?updatedAt=1689419138336',
      socialIcons: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
      followerCount: 2500,
      checked: false,
    },
    // Add more data as needed...
  ];

  const handleCheckboxChange = (id) => {
    const updatedData = socialMediaData.map((data) =>
      data.id === id ? { ...data, checked: !data.checked } : data
    );
    // Update the state or perform any other action with the updatedData
  };

  return (
    <Box>
      <Container>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>PickInfluencer</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Social</TableCell>
            <TableCell>Follower Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {socialMediaData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>
                <Checkbox
                  checked={data.checked}
                  onChange={() => handleCheckboxChange(data.id)}
                />
              </TableCell>
              <TableCell sx={{justifyContent: 'center',
              alignItems: 'center'}}>
                <Avatar src={data.avatar} sx={{width: 50, height: 50}} />
              </TableCell>
              <TableCell sx={{justifyContent: 'center',
              alignItems: 'center'}}>
                <Typography variant="body1">{data.name}</Typography>
              </TableCell>
              <TableCell 
              sx={{justifyContent: 'center',
              alignItems: 'center'}}>
                {data.socialIcons.includes('Facebook') && (
                  <FacebookIcon  />
                )}
                {data.socialIcons.includes('Twitter') && (
                  <TwitterIcon  />
                )}
                {data.socialIcons.includes('Instagram') && (
                  <InstagramIcon  />
                )}
                {data.socialIcons.includes('LinkedIn') && (
                  <LinkedInIcon  />
                )}
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{justifyContent: 'center',
              alignItems: 'center'}}>
                  {data.followerCount}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </Box>
  );
}

export default PickInfluencer;
