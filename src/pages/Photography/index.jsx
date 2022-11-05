import React, { useEffect } from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import VoicerSection from '../../components/VoicerSection'
import AboutImage from "../../components/images/shutterstock_204682738.jpg";
import MainPhotografySection from '../../components/MainPhotografySection'
import OurPhotographyWorks from '../../components/OurPhotographyWorks'
import PhotographyTeam from '../../components/PhotographyTeam'
import PhotographyBlogs from '../../components/PhotographyBlogs'
import Logo from '../../components/images/photogwhite.png'
import Footer from '../../components/Footer'
import Banner1 from '../../components/images/Photography/banner/pexels-zukiman-mohamad-22185.jpg'
import Banner2 from '../../components/images/Photography/banner/2.jpg'
import Pricing from '../../components/Pricing';
import { useState } from 'react';

const Photography = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const [currentSectionId, setCurrentSectionId] = useState(null)
  const [offsetTop, setOffsetTop] = useState(null);
  
  useEffect(() => {
    if(currentSectionId !== null) {
      window.scrollTo({
        top: offsetTop,
      })
    }
  }, [currentSectionId, offsetTop]);

  const data = [
    {
      id: 1,
      img: Banner1,
      subtitle: 'Photography',
      title: 'Professional Studio in',
      title2: 'Nigeria'
    },
    {
      id: 2,
      img: Banner2,
      subtitle: 'Photography',
      title: 'Best Studio WordPRess Theme',
      title2: 'Photography'
    }
  ];

  const aboutSection = {
    title: 'Welcome to Photography',
    subtitle: 'Lorem Ipsum decided to leave for the far World of Grammar. The Big   Oxmox advised.',
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, A large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    img: AboutImage
  };

  const section1 = {
    title: 'PHOTOSHOOT SERVICES', 
    subtitle: 'MODELING & PERSONAL SHOOTINGS', 
    // overlayImage: ServiceOverlay1, 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  };

  const section2 = {
    title: 'PRODUCTION SERVICES', 
    subtitle: 'ADVERTISE. FILIMING. YOU NAME IT', 
    // overlayImage: ServiceOverlay2, 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  };

  const section3 = {
    title: 'POST PRODUCTION', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    // overlayImage: ServiceOverlay3, 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  };

  const productDesign = {
    title: 'Product Design', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    overlayImage: '', 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  }
  
  const weddings = {
    title: 'Weddings', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    overlayImage: '', 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  }
  
  const commercialShoots = {
    title: 'Commercial shoots', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    overlayImage: '', 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  }
  
  const portraits = {
    title: 'Portraits', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    overlayImage: '', 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  };

  const prices = [
    {
      id: 1,
      title: 'Basic',
      subtitle: 'Starter',
      price: 199,
      benefits: ['50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space']
    },
    {
      id: 2,
      title: 'Standard',
      subtitle: 'Better results',
      price: 199,
      benefits: ['50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space'],
      popular: true
      
    },
    {
      id: 3,
      title: 'Premium',
      subtitle: 'Go all in one',
      price: 199,
      benefits: ['50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space']
    },
  ];

  const graphics = [
    {
      id: 1,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbasumoh%202.jpg?alt=media&token=3203acdf-8ba6-46cd-9942-c3e67fa77534',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypABvONG89HQVea4Q2oKvGviI1D9AqxB4Gdoe8LUmRuqt3Z_SH3KZ7Npy-4fk76FqwpORt4CWuS1G0Ah2eT3gp_FZwJ12FE2amXLZ-Y0Ha04jc0lmN5V7v77FYOGjB1FX5qFcXvzoBm4UK_qbUcm8dzGt_aBAyBkmmexmo73VBH1mHieInZLHYPLUQrgUjEoFkokFJaCosjBBF0HJ0Eyp4wd2kbO5fN7kxvVm8Sm06Rzd52u-Pl9KO5LstsEoEY6M5A7wjevYyJzGCup6O1O_ZiKLmshBLyaiTu6ycqcEPyC9aX_alUCMlFePkvyWVjL8auAJIv7uuwf4x27ejoYBtayX_cwtST3VXWmtQOhrxBN1GTEdd04BdNV3VbFL-X62pQcmKIZfJBEEi_z1qGmIfMCnfMp90ZYLe1hfvr9NjODwkLVqlgmxa0ZOCk-c8JHgycfDz2QDz30ttdsX2a1MJ_4X3g31I3Rb40MKkagF9_63qNEruPsJFMTDcj2XAaBug2gmflBarUvA44U7JK94BtmRyUpoC8V3_jYB-ta0aE5ID7RF2zkog5UTv25wiHcan6449i1O6ph_McFFXETkRk1OREPpEGWNz0HeMaSNQmX45OzoRBgER7bcF9QNI3Lfjm5plt9oWuHxF6o_Y-NthUK75dPsPSjybyQjoDb4hqBxnaI99l2PFXE39YV4Jlo4mRPDSGJWXj0mMYl_wLSkdLpVg84p1py75AZAQeKPpr-e_9HUVI6xngp1NffgSJQI7mN_0yWC1DG7I8SGm5A0CnXnTBwZzf618ChwZ-jtYL7ihcexPRTtuXyUrxt2P2iFo-U7rjnI-UEpw-nnPGYtsX5hHEyXkHIniAHBNgxsD8rm78rezyP0u4Aw9hsUq9DKFRrvEKwhpm2y6tzUjpMtxPhP8k-C_V47zoOWRxFUXGDmnoxOLlyXpZSRpESG5bFfVoA7pZy_cxuvZ4Gp_FlG90CitSOCjrZjkSTP_DW0cnrmFUhL645s89RObMQn_K6XRbsqOk2rL3oo4U3v4y4cqnv448RTght83y9bG-soRdYJpMVOXChTLXSt-A3wNZ3VJiZNbp6z5CncPrc2sUgqdW01E57COPZLtjCcugED3VM3ACLp9smqNOMuWT6b7vxE2anQSACGxlcfVlKZ-FW5caSlq5TXClIcaCFIJE1PoWV-LSU3eafmMwkP0wLmAJSjucX4BVKUr1u3Rwzy21Cy5O4X3E6zPNzy80W1VWltNCfoT45RVFGQCSe_ILsRfM7wAiCM7msa_FNVJp1wL52XXJxRXGOlqHtghwLGAcYQN0bBr7T0DUxSZTeVIVVcTRkV6qpMsnHD1mBJGhtJ6oSvo5VIe3lPIEKHjKeF2Sgo4JWLpGPXW5zinh0IIrIk98AlGrm-umO2OFBmgXWtEmqkYO3c_YYEzJEf39NLnr3ZIvMVTWCqXnOh1K_3i7Xbwd31cdYULIdZKLTTFM1Yslc7g=w1110-h666',
      title: 'basumoh',
      date: 'JUNE 6, 2016'
    },
    {
      id: 2,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fchamp%20mani%202.jpg?alt=media&token=21c44612-a283-47cc-98a7-600bd0d7f8f0',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDGls54-tPxu6pL1RhYE8Se3hR76sefP5llS7lEKjWUqLD9oV0_-ICyB2f9yHCwtuxMZnqHfC4IAD1b2xkNs3JvrWsZBvFYT7aGxWoY6US4tBpQsUfU6DQwDywMHf-B_5aBZRHSbPO1xT1bC-OS6ezUu-9tV1VbDQnjZIEbf7p_CrGXkGMm-YX9vQeMJJuU-UPEY37uug7Pa9dxgslFcTL4u7tUXOrE3BXbMMQGgiq9GhyT48GDy6qFSebnZd-SaD2zin36RUr-mpJm89VHFpBEJe3FLu8UAB8ryRu4MdoYFHb6oThWIHPmiiGIPODDsUo8ce5rEcWvj_wk8q-QQWr4lKijyGokM8rc3SWuvRyiHvCgl1B0pX_hpxLPuUN8xAaMYWTMcUyC4HPZHheAMw989qGwDOVgOUzlbPnTjjkmg8vBH9jL73DaF6kJT1rD5Oxr4TAhQ-QeEbzuBlz9nTeFAcapA-JL8Gw0PiitQ-bjuj1b_noGhe3PW2-LhAWk5xBA7qSHHpGDs3wFDRNvtyIoq8Iig0s-iwxL9KiEbAambzB4zqRZLY3Uz81Tc-V4sycv5ON2UUjCaV_Pci9Wa21f47rcGbZqvIbDUNlF0majHKrHtYMoFdQF9P0OEt7ALlvkQ64vh_N3TaQywMlQbw_eZV8jhTJNfJHE-8BMFLAgKjLbATsgjkrz1kagAY29gVbB4xEp5veGRZcWh3qc1FI8RtB1S39z2Q_64OZurKNX08KEVtlssDDksDDeBAQk2Cut0s4eDxoE2HETfmFfZVOVp43725sSeG59J8SEGDcRg6LhKTJVtekwFPx07hy2oxGYN3exI0J-wZa7BCAWysE8S8XW25UqP_dCMhg6bGCUf-CSCnrhBDs2WWrNzj2kH5SuCYO6TNHuvvtJ3CkrzYF4qYC8_ZsMcn2VOP_jhb7Zl-odLpDYEX-XEKg_55yPhzEZLfN2q0uyuflUNABGLFFXw5D0Z5YBIAKvMWfxYkR-Md6LOxf0cbwVjyRuZqDGMGx9fyFkqebdhac24fglpgvUsrCNyWY6nemHzVBENMYVt8Z5I4RmVZ37a2UoNFzRhrpfD5IlIOLaCUW967d49-S0GpHOmqi4v6dqaKqzvkh7foZZ-MC4_JUalcl5hXmtc9NU0jLkyba8ux2N4-6sKkQfmbOep77WoDb5qSt8K7HIpk8On4-FyvHgqO5buG47mk97vHOMTrQF9E1ME972fZ8tjljUtesJ512C9RGMcHwXCRdEqM6_snxJn0-oEmaxTZ8KPjAAg6B2-KOz4HqyhuqVk29Whz9cYcxL7SYbzzVsNrZsKKKNCQhm461Mt56xxXGZNGgHhVOgKGXUh2fB12Uvp0MYsJqC1j_RhA4lanS9lzqNk3SCXqVsh9BBmSXgai7PeEWhW0rRaWBAgArieDjXteav2SXmiVOWF5YsxsuwpZhbEk5o8hEd50cI4pWizDmxURMbUTY7Mf31k9m-jg=w1110-h666',
      title: 'champion',
      date: 'JUNE 6, 2016'
    },
    {
      id: 3,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F85bc0215-a28b-4d95-9f6a-a775a432e3c7.jpg?alt=media&token=2defa4cf-3aca-4f10-ac90-f51eb116357e',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypC1B2dZwadeJXNekbHdzA1e24gbmzj0a6lqxe48SnRbYKBDGRn0wCp58j1flud4FE5ZfuS2wq-TRGxKHE4VmfzSm45Ecgt4oVVUKfDhJTY7v1nZOsWM0VI2ykE9t4mAwddV8cd1qvZO74rXcsEXcW1iUah1nA89YAFKVtTDTBc90x0uJpPj9ovnxO6tBAi1gqU1fPyhrCIwyo67U_F8VGfucT-dQNdu4sT8yPpi0vp55Oep3kgmCodbnQP1IrHRO59qMzd8Jl5yIKJJaGfJ4e8nH6ZSb3Olc5mc9HvK6m-X5vT6m2FDTdyIg3QJiUsbPcRCmWBv-dgEFN5W05feJLV2VxYDTCKfAH3pvmylWa-B67ywNpZfoMFNn5PlLxD8zZy77KTEGoHFx0aFqXvNu-sYbwL-IQ_TWkv6sLWx0wUSVb_A057yrGq7UBDGnUVJ1ETMMOGbAmEVCbuHlQDVuO4_Giq9YzNaVS920aGyL67NoCf_pCYz8Fnyg0mWGbtfBBJnecAy8QZFPpc1nDwyS1okE7eTKk6iyNqK0rfJwqvUZ5sy5eh_vlhPICgRjwZjQPfttnPzmhSK55Uy5i0ux7XNPDhFk2ouq1Qfxv6GYaD7h0GY_Z2E5ZEvVdu47CIBlnWbJImcmQcz0nfzjjoTm64yTIuyhbAr9zSoK9AaL9OG9BcZbZ9wmOrIjgEegBA-WFI87rSewo3xMKTsHdUOnSLDkghmyiYw4B1bBxLO-ZHPNXDL0uVLnZFAPVh5nEfj7t_YFXOIaMcsPQeVMGmzTO1d4N5y3B2Wn2BHvxkmtZQTcS9BfNXWGlAkcNMYIFh5P0U3sphE-W4979SPIbfklXEhyfsKwo6zP7zVpsSmwMP8m9UkQzpQxykNfiCc6k-Oa4jr1iX-SzD_B-ZWU9woAd8B7og8U7VC2oako9ukOg_42HWOEHz1tshLrne3tb49cEUwAa4LTdrkwb3GkkZgJDTKljP0HPhmeWjIr4qS-nOD2w2J-xtVOlXYycWjFdswLTTSidGoR1jbtUPWcsltaUvpMd4ehiZ3j5mf4nfCglhILlWlVBtfDQZC2dN7O9C8REiniVzHaGYSQQ4uvymyQvLQDIpbncXN_v1SqapFgX_LFGU5dmLU1qfSCsM4BQTXLOKt6guw0Ux-DvFStPR0up16PSgT1D8ef5z1wPk0eAWoI-LpXceLq9oYgsYQApnP3vGjpGGZH6p-x41DTA5G8SerXFz40x1YS3WqPIX5N7p9waitd0ouilDTbcArj6N96BXK-0X8y_MsZjBje3xdC2Gvfnf8W9YHzkplb_D4SCGKkxF7PGWl6UAikfbth7RHrWevDl9Rmlxu4abJle9HItbVlP21orKt5mh3GQUdkU8NarNlOj7v0oRPn_bVd3LEO7JWU1Vvfa8MMHgsfbvhsbVgO47BjQv2HHxSGQPEbs-zgM974BFmvq4h0fOujWwm1KZGIX7Hh_0IV7jPcqUtCA=w1110-h666',
      title: 'Mock Up',
      date: 'JUNE 6, 2016'
    },
    {
      id: 4,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG-20220628-WA0005.jpg?alt=media&token=89980e1a-27ae-4374-aec5-43166b81a5b6',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDvZRcD5j1rjOmJGeN--nhRGUuZjGfppquQIXE4iM3pXoCafh9nKBi3CMiey-57_cahkAN5OigSjjPGvV0I-MHLAFdxmm4et_OU1coBYPUc1M7lbFu2qJXeN3iuHtVJeNFvgKU-lyAX9c9A1J7uveHVfyOvia2dHFV2qLnu2xNWKMXM5wZqNiTjkEEU8E7x7niMxQWuWMgOBpjF8OSFh_FfznJK6edyGFYkaF9WfI5hmIY-tmMno_jYA32Tl2qMSDDt7RFIypdx1M71LYw1DWFwQHa0XvVN8tSGibNMsuoHv_bOtNmIAOKWWaFTvdXDDGx9KmtRoTMX-iWZNApj83rBGAhhvQVFWjIK8zPOvZkhp0gojrvR5OfFFb-nAgVFcFyCN5ujiM0i2QLUE7wzRKuS8cc0fhNAFxTcAg1mKL_5rgv-Jk3hU5aLrW6C_omTUVOqf92BPdx1efRzw-5PjpXLHLElM2MoYZJ3BaxbCHLNpdYNjTqrFSbnapuKiTlxuQ1ymN4dOYNbG6RmH2UdczD8nNa6ZVkT6eQuFNGftaTIV7b1oUBjHYCUS3YVdaIyOechuLFxKAR1rCIgNGNUUyaF0pj13XJAaq8dzVE_xSFL-X5BGE9cVAgTzVjv_dIXFtMoRRGsegWvwI5eZOs3fxaaBZfhzsycqWxMKY-MtgOrmYUBjQ-xdI_r9vTwuqkSCKV18HHAo47rJTwqC-FFRiAhI3RkumA26KCxUa0lOD0r4Cj5qvjfrva-WepDTuH05lWQ5J5MwVbTiUCtVebHC6seCfebZDPp1JGn4sxTIcdMECZwY4IQauo9auYHBm-kbSXVGbFEySMeViCkZy3AlZmmFNwI-rggb4WPN0zkhQi0QIhnOOiFAzHieUl9nNFFj0mq4JeamMHYqRI2lKHfB8uWC_E2Zhac9BU_wPFYXVF13nMyZHM5P6fICsfXOi62b64IUkwbPUzdPkhntVus9CcqNy7G8035m5vGj06Cjml7iojeKuzj2FaeTdce1isrbpHooVA0Y32PvW4D6IG4ilwik7bGrcFwt0wzcFNBZYDg8iOotaLj48eh4AqG6BaNF3m54WSzz5jGIn1D0_1I2hDFt9slGA2-CUk8wqGeesPD3xkGcadzQAgK2FaqslIfcUP1FC69QBcf1Cmb-Cjs2OnjQ2OZLf0qB0n_VOwQupIcfpt-TXqfGyizWl0j9vQfKXeNT1qr1ty0t59n4HbO2b_Rvklr_82_FISJAP-jfjn6hDLtmyYh2MPuwg-q48mYFhu5wBVl0rh_HV1srDWzkzu2-xuDj_viOOsVRoJPEVLCf7KoTk4t8kZ2JIftxPOoFkD307mn_KDSwUjL1htl2_xD8b9V2E0Ovp2PAAmT9JSU2yxaxSzW6neuUQu62EHymi2bn8jNPkCuXolJ8uAGZAmgKFrdnZFBSnmEl__81aqEeZ52Xz9MbAtVCEF2fBumZfW53VEMnWF0kd5jUjFpUw=w1110-h666',
      title: 'katiano',
      date: 'JUNE 6, 2016'
    },
    {
      id: 5,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Flatonnes%201.jpg?alt=media&token=1e14a660-b6d2-4852-a8bb-8bb9ea9eb626',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDG3ErXtwOhCo2iFgm0wbK4lVxmYIDmPPCb3Q6KkEua73kDjwp8cp1xef3QCJLaJl1i2zwKDAXoxhwevsuXkaHSfBCdY0KLMEhFTHvI9jLL0UqXj2dYGhlX_7yhOLaDT3MR5HajAqEnMElvuuAD5GKJIZasTUoUhxELxeNDyjzw2orZOhuAcInjT--SoVBx7BzZNR7Q6G3nLZ6_5tPohzBbErBkyLt1HQ3qO5zjzUdIaIts0HegAU8s56Cgav5xhC06X3ARy1hvUX15ld1ttj2CMO3_B24wl6W_9z-WxZurvO-nC8-NqV81foMDXb0OKkfFxjvtQr1k7y_rwWizMlQWjyTVygXZAnE-LAK9iQy6xnpMkBAGLEZ4_NrmDK3NAAX_FZA1smhDwLXI9t9184slnDlBHXZHLbIaNGTgK78A2_mtYqDk3MCNkFLAZzVA8xbjKcgrMwdkWR0Vs1gYF42Du9RqrXm9NEcf5oiXshX51Lovg3xXEYABsGkK-ENZDvqGDk077lnAh9vR34Mu4aQleHqxQ4gLkomfiqasZXZlNyS0m4locU4o63FO3axRB-_BzoMJQcF6mkcDF66jqlFcEYwTD2mJRSStDKn0FbVNlxE86TDhyZUnyp8mvejkOXeiX3QQZXy8DV6LT3S6s6yNI2CGM8KX6ssLmmMr6KnCARfKlXbFsk6tA9h1K7TSLvvRZtTtgKpjdfhXCipDrYyJJmtQEzbpWXG7Dct-dhj7TGWhgQbgaxDTF6n6Sh9_RkT4t3bL8IVqv2aq_-KHywv28Qh5jFdezW5fGpq8b5Uxe1bfRYqbOUmt_qda7osMeiCzTWF_LOx3oQj5-T17NORE6jnY8bi3GxEoibjDSiVqWlAV4I6VwrYnK45zP-AoTqjrj1PbWPYSHh6AXcbeed91X-vqTNKA-DkJO9i8xL5s-pBP-DZetgbkyjRjxm7faumoQpFD6TUVAfXDHorQBeVguy7Tmx-pWRiIuPhnuGvNLctTqh7t2cjwh5DmonYsxSg-PMBXqHeO9xneIXA_rUN2WN-gqVD12ObykDWxT8sZ9_BXJxlzSM_w1Ffd-cOzuf1v5Q6YkzI7SDfafiIBZ1pi5e4abX3YkwovGZLD5XfwAclxFrb7m05wHzBbe0__8G7hn2x1V6UJMlR7Y0eKyzJvBfPwu7QkstWEnX5NJiGMIu0RMu4yywZgtAe_FU4aE5FKmdJfi1z4MuUmi3_2ToKXsab4BpXOUu0z_XA0Y9ohWEvzsD_sB8SyBAlDePG_jtM4aw6W9rnYD9tdZqS3I-icPLwkUvdgduWvil0SrvUBjA98nz8yXg0YoEAQxRfYAAGdmzkNjkU72S8CQOC5q250uQosJo8oDvWtk6BFDH6kDsq1cVxb4uEcCJv5ldir27Zy0CSCi9WcGSvI5ykl8G5ZsnzDeIGzk-Zwsmz5zwyD2YQ1jBsYq2h4hdco1kCHu-C5KUHb5v-p8ltfMtkFbA=w1110-h666',
      title: 'latonnes',
      date: 'JUNE 6, 2016'
    },
    {
      id: 6,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fnetima1.jpg?alt=media&token=3dfd814b-f8b7-4d42-8321-2f60404d3352',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDvKgZzlso95YtqngOaoBeTUI88QhH3iDX-cnLB39OSHjbOw0Ml5-UcxQMMq7_v4dnOAWiKaSqowYn-EajlHjqIaMFKZbtTEYDVBGkCNLbZr4fFQHWNy2QE86165yD5xvpJdRRyL6A7XSLeIR0m7x-fYgsqatOKjbCMf_fFITaET6jPAnf3UQzK2xQEfl6w58L_1428e002srlXJVg14LKqUqlf1rqEtzuLIfAx2PZ40OB6tz9sQFiP8W6qQSIz_vyOXPYFqOcsKV-OntinzafrmdDhsXSQ1gRYmfmmvTe36PoTc9nlkHerEOWXQuEZOvLM3Wkib6Q-ZyfHaCcs92fayArrXZCsoNAwJw3qvfHjGEdWtWJhEhQJKeBlDIdaeFsPiNxbii8el-o1U_IyM8MFevni0dVh4rBJ8wZNj3BlNhS_83vZZzJdFwAqyOAqKe5GINS1KB45f7K7RptspIIpvnjxsfM0uShWOvV6CWrLvXWRi338nnz79Vk4jJVSvfrkH741yY4-H3z0hTLFKSLFi17sH0jNRvD3Ys_7tDEKhyBfg8K4DfraQgBDk-S2q_xzmj_T8RoyI572mgylLOyKSME1kWBIL5z6cxdjXGYpnekugYPqZwsWnRs0Unvs_8XltVeaRmN5_C-Rv0u2qegKfx1ot2bTlhhWep2AzSuxqJl9Okwwsg6z4ZPRA9CrsDKZQEb4-oPTiNzP2dvA5QRy_6xkERMWDMyJRwIArUMM-V2XigYDPJXF-PC-31l9GZzXQnWtObhOdloFHOjdn3Rk4pOqsGj4TMfkBOpyrT-OIHFNXks61Dt98lUbwasHInrD5WX3oQlFxg8rowTW9flK48CIKsW37x-699naWwCX-QeYp7kNSQXpK9O7AA72KzYRbFrrr5Gzt_4BrXRtflPN1yWEkNhkQwpMC4CVFkfP5lR_50HIxlqRgxmdB3t1tZyPg1RLMBKKEC_8I4mahoF3nswr6Rxdct7CHkFrDvHn4i_luBCOWTwQ6RANFC9YcbUtHoiJd5qw0T2ipV1vUN1oeNWWNQeB7XNRoeO_w_YPnXKYY44eAWX6-2tAdZ8d-iNw-7iKK2IbJ6iW8M0ZMmccVej_R7kzazzkwB72XvuaSUZY1xI2S928fMJ6bw-fqHFLDaMcBu7rqm_TAuAHIiI8NotsL98uMTbfThfnM03HDkjP46jusM4HtlNF-v5zuflbcn5-M2kX4ImOm45pJT8jWX4CBb9B5g4TGKwuuiBXCh_fHaMgQV7FVnusoaLWDsOHN2DE-nfCSGFgkW2-sCbEjtinIgEjrQumXa4t29AmEbX4uT383evAoWvOWA4gQOBwTGHHhgQWcn-CyBNnxhbAWuvwCME_GJsgUt-CqSlrirLp9CiK6pYjj9nyquuTB98U3iGUGdBHgY_KZ9Hgk2TfYScXlGQJIFig7ZVnz656_ZJv2HO4kN24yqE_K_C3pfDqnzugYK9XyxVJyWvGKA=w1110-h666',
      title: 'netima',
      date: 'JUNE 6, 2016'
    },
    {
      id: 7,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbridal%20huz.jpg?alt=media&token=b2488214-85ac-4a09-b9f6-e3d11c1579e4',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAK3NpIsYdGrtEG8tzQmsdUC_SmYjmki7sOKTJakB7G-Lu_f4iLAqtzSDCFpqDG3KPvhGXS96rLZw2J_RR_aCxBuBULZ0tim5QBmeD37hQRjB7-MSo3RCS4XfUEzw1auoW2BiXUTjc9sy9aKni363PutatUJW2zjmiBdR5ZpYxlXe3uluIKfOf4qSxSb9rtt95SPv5rosNjKhQ13Q5TGy1KguZldulFLHjHsupmqFox3_NYByzfiAv5ontV_3W6xt6lMZnC1BF2AZqzNS9Hbw1dzyZNlIv6yHO0slGMwV5CbG9qyRtXEFc058u_EVIh5cxqKhEMd3vaFvHi5OX3e6WiYRJHwP2UikA0-wyXXNqzpPExoifjV4WYuEGpt4rzUpAigyegHekil6nS5DdA2IFOW9DJG4VUwbQNP1ATB7yQpBSUXrWLQQoWkgSlFItDEXbnKYeC8gHpG22FAR9kvqMldtujd_w3Ea-xPrYqR_gbiKowkhT7HEjIsDW-n3K98CS_U2WX7d-4FYFdCnn47MqOb0sTGqD0Td7pjcttMpVeAt-M0nw6KITqMZQRe2vDc3YJq53i7XeK9kLQdxIxQjlb93O6TBVcJW1gtwwuv16fI956yGsjvRyZI9NW1A_YzI3n74hYWKzN9b4anFGmcVmf9555G8vqqhRZgUFQSiK6aDLUMzVobLTMSd7oFyahZX8PtnJAyIobYMBh6B_ZBBMtQbQRvVf5YLwvStt_l8KslHcQgMA_oxNs3mTT2dtBVb9i2918CIC3M5VwyfOWEws1UpJqca6nm14pLgEYsLanxD0tUwjgcJtcS4YJv-OLs6hd-VWViio_e1F5ijZt6jOG4UiY1oMUC51JzSZstyAucaCYWNGIHCNObDryOdd5j98YEB4ULCPlz8im5shxetidtXeeEuDGl-syaXpm52IQBnk2Do9bg0GvMkXH8ocmh79pnVgTadvV9NorsODY-zmTrqr80BpJvhiQ7zwvl36x0uuK2IJ4GqKvoPEdD22vg86cbvixFxws351IRh_AREjiiMSIXqNHutR0KI1JFU_mWVUSCQyZYJIMNmiS-pCPSw0P9rNnXXPKhWrD0Rej3Vc2UwLFBz2CQBFzHMP5BFtZsH5DeC6d4wS2VQwsvHjJGpeZWLV2YysjHGS6qsH2Q_VVl9ZO4bDF0RD_n0fvoZGRZc3sGCB2ph6sUJuqIegCNyx9ebLawCXjnWiL06MpMaVt-QSTUhPX7lsNmtjXaI-8s-Rj0vebPYkpwazOf2_zIlCVZWCHSq5lUpIOiMzTppm-wBRJrvdPr3HxXe1nccAkSWZR1wzd4va8rqNHg6KKcoSb6xaBoRzUgZFTo5ms3hWS7SrNz8DrVkUhm-ahMqN0YbSPSXZVpoADCGgUNFzxwAP8P0wQ-5gKL5Yv_nuRCqErP9uuZnpSF0-juYdUv-Orbg_mdI89HguGd-LJScpsOTouUI3nCqok9x_KpLaqOA=w1110-h666',
      title: 'sweet bride',
      date: 'JUNE 6, 2016'
    },
    {
      id: 8,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Ftinaries.jpg?alt=media&token=96f1327f-86c6-4484-bb5d-3f45c08dd12d',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCruhQiLta8ktFzB0iIZIBQVCHiuZ1Y5PhNtvOpdn8CuQgw6HuN88_AEcesxsLzw_2bAt6jZTZvYHMgmoJw_GOcdzyXhvAmcEHaOP-sH9K4zaeF-O7Rn0uCPVPXGGDTeUw-MHqCd8cf_pNWQqaVsqF2aTrsde0UXZ4L-gyLqx18TOqnTnG-ihikM_QlTKzOAMcfx4o0wZOZ8v4KL7TEpbbCzYAa9DbPUjNK_XBVNd-qfBbo9PCpQ6N1knHBSRkBf9_mzy2yZbM4ScYQALIYXMO2MkKgHzaLXYBibVSUUn2_4o-nRpseuxDxmk3zrWNkGOky9GUKZVMvfsNiNJfWM4J6aKfLhmYHFG5-__sQAmDiBeqJs2jhvueT9yUqRBVu1bAeof6ywJXvAehvRnmEEXjx_aVbRLLyfAXqd5utzRDN9CcJoWMNtDM-pyMehvYk475jUMlJjgNMXPfPwO8xK92MirtbKjXF4IwUGuse49nQEaIZ1vNi-QRt3k21x2Er0igDxpM0n_xPb1jGvI7Hh1HJb1r98DHMEbT-vC6pIw5SgcRUicgek7nNKCl5CDXaA1bV-PZ2CsuGs66QbxUGmpw_2lItrA8zf4c6t3XGU1hqDF-lGFF29lEBTUOORMdXco2M_CT_L_YhnyON-10sXEhytT2ueJkIUq_bZic-pw7bgr3QXJfyuFCIG49VK2A-_A3QOzHPQ2ApEP_0cmq-g1OCjS38S6FLpaYp3_A2hcopLJGDPLKhJCj8Ot63m80ETS9NrIqz4H4XzreupYxDiZEa2A5fGXfG6JqfnXa-N2OOy_3h6lwyv2UW_ECu6R-0etVUhIY3ao4nHlJdlgT0rUCMBPj8pqB8UbFpN2ZxY6Vhx4tAgSL4qA5KqQKnTHxLPuIWs0yx2MiLPLaI7uTdXKatQHHLGtcMHK-23yXXlTzAxP9rO9NlXRsSa6d1ehZm7xCe_SyrlnbD8vYuFmfSihDgixbOyaXa8cNdRTTJUpJIRYdnJDAbMy5IKb2g4MG1bW3pdhwR3twZKi3KW_NYKX7LByRtzCU8eAwX58FSUFRcnQMlx3GP2-SNvYezO4tnaRyof0C_NUguM3DGwnGAbVs2ED60kvTyNdpjALIQW1brWp70BQrSqvB-vS2kmyRshOXhqlvJOY5ymJj1TngjBuHFxilF1QwzE8cDHlpxucXmMdxLujj3dLkhMd9JvietD26O4rmU-p3ma-CLHJuKWIOx5ctm7Tc_q0BWDIHjZtwWWeZ2lSUzFlQbAursG5JHzM_acFiS-EWUca0xsAtRB6FyaH9Z2cpCFu2-CgeERe25VOT74DTPAeOKyAp90n9BdD39mpQEKNcu6oznXUXF8u_xlb025aJMZGetY0vPylbluMTYsq1D-kIJuNfUKXFRpFzK1_E6sG9pP0CP22D7FQSL8KCy6zIDI008iorrNL3Xnddq8p3g3jokleqxZMPOmgPeP8qaULQ3OHoPBYPddA=w1110-h666',
      title: 'tinaries',
      date: 'JUNE 6, 2016'
    },
    {
      id: 9,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fwestgate.jpg?alt=media&token=71fe1db8-549c-4540-971d-d12ac2015467',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCfnTcQINu2PoPBJp1bwkHv33ABQE_vx4mpmkA_WWyJURwdp8J_6_6l9FoSg9EHgLT5X5ErdiwtKWno5MV8jyZUFmrjbgNyaI2jZ9RAyfYwrqxNWO8Rj4BKGsbdqpVbO3EETJntmoD30dLNKxIa-72Oqe-XQi-m-7_akfEXUSrqC1ESCFHveV0-JF0WYAFI0HiqO2d60heuHGnkc1lXv7mnqz05l_KFW_0AMxBRh1rKDO3zHwd2Ej4Ezda9p7UeGmuFNIIWGtXtJFHC4bZE5hvut-7t38v07hbdDcecDiwT_cTHqYXZt7jga_umU67YDTjvIfktNpWg8yTkPj3O8cTPmETR5fBNRZjWpM9Zm9KvWCnwIYn_d35gvwNEgL03fJLyY3vnmDgl-DPT0AI2vGynEwgDjChA4qcfamjS2_DbIlaC4tcQaXK1hXnS2-u5XucP2O7e79iD-oIvHjLagu5bdILpsbzA-Rg9WhzzS0CN3IVka-RYzWs1agkqqaODvEOorfx8INq-tgRQQVYAJgCEtEpmcknOFSB91E6xPZcCBIuM13bk9S7sLcR9wRx-aHvSFrEeFkQTrzdT89SGPXRZt9DFbop3m0Pqc3ljM7Qwxb2M49DDgQ8PfqnTR1fvTmEtAUWEdYMlhd-zFxMVF2i4AyqvkG_MkO4cZLGw71yvmXs0KZ7OS9U61Xh7ZYM5lZslyqiSHk8snYVjlRro4u7KDP-OdiBQ8M3Ok8LS-2gTnaHXASzR-pPA7JCj7awbqLgf3aPSxRykaUI51jkZFs1dGEOWDNc7DWhYtxHhTWrmH2n2fI8Ma_2-TIb4tog5W_l2knDCkjih0-ziSw6rNaLsa4KNO8YmXbpwdAD8IHqCDDiHCpv926iU_KsUlTZ3x89Lq0PNtv7BnUxIBlMG1Txkdf7G8UwU-mu-ckKR1s7eSFIb6w1HsVeaZCZ3tXKodaO-1Wk2IyaQ_pzlW_36l9KaEFKTzB1pb5TLipxFkgiTzHiCAeP3JAXwTVoKO_wQghXTm_YYB9MOkIBFsTW_ddF-pvs11k92huDcYq2sa0uSUj89qWR-hLQGp4EyEg2hyenW6QqKTXZTSOI-xQqD2au_-F9tUGA1n3EUtfh_1_7g-s_Fiiu9ebuqqUlrsywNL7teC502nlYzAv1aSuubJDK1AOYX-h00EsoBawM_h6IEuue9qpjZuv_V140JCG13BWFQPpn6zHAlJoviZ1He_eeBCHrzGTiaUHaS8R-bA2OVJZmH2KcZqXsVQiO9Jkc_qS4DC-I8NYi7rXJReyMde-SDpd8wHHqIBnByLPBQrsYWWIx1g2EArs_qh8HeECMiGVofifYsdWqWKoFvPpcPaCWq51zfwSLfzxzD0R69L9C7PHKow5wQBtcDpMTtW60sbkT0pL9VWsqXIH-2rNszyarSabX6OtEWciNN4LI2EiYDaBGHn8BMqxWwudOLNO5G6VTw89PbsGkdUHocH6ifWw=w1110-h666',
      title: 'westgate',
      date: 'JUNE 6, 2016'
    },
  ];

  const collections = [
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '0',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0899.jpg?alt=media&token=5a9718bf-6db0-4e4d-ba01-689043017130',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypBvmlZPSAQARx15rQ9VALi2HeKCnYFglcxQHsV52p-0CqIS0J9vZDcQIi9EjGEF009YgsuWZoB8myZDRuS-QkQTT7fS7WCsA8D0C_4ia3qSiIwEbPmnv2PqXKGvAGedl-1VleUKpiM6YMFtxJXXhHivGBA_3IPIH3UtrFE4uBsn1AVbpTT0laGiw6mlTsMSRGuoyEAtrBfjxl-T12pW-R9UIycZsDYaqavCXbjuQpg7Z5k5_Xbzj6uIDUJpnmAZ76ie5Za1ouwescCZmjyWGRdIHUiqEdh_KDATT_zoqX4YGO2sn46sTdOjQEpuaO4u5lwsDxMCMfUcUUTkIYZKcE_VaUZXjqvUcnHw4C3j2JZqIYzuQG6_1eqyxDplxQmvRM2Xbxlxvo3C53NBMmaduB7LF_uYhyFcbtR2kJbH2fURKK4pZoLzN1alW5FoqV_R8wjtY977j8C8QJGUKGPqsc987rUoEQpn8zyxGrsvFFR8yBOuaAfOclYN1JICtCSa704T0csKiGBSOoRuPytCNBIJwozViRRleW3NedEVLeGjsjIEpHUL1qLfahVODxYvaJK5yrgehKRThtDij0d_eJlmkulHa0rJMYtQlojAmL2Ryg073hZPHDtv7_FpSUuIWrnt_sCv6_qFkXyCEdtsEOELsNkVPjMaW25kib6TpRqONboLDzpidQc9quglymMRgF2qPpH5unSqXZiTpbHN9N3sMlNGpLhG5gZI_TG9L4RlifbwzXiwBRR9vELLd6mCYJu9hyfeS5x4c5zPwMthRzOUGQplqtWLgY2eAFkMUq-6MDf2TqPJ-4VKBggKGg7A6kWQRjm3AdRZ566BYoIaT4GQKf4KO6ZBNbWFPh9ElJj1JAgr0DKAfFmrjnMqnqzR0DxRMHetc8yrS1nRUnn0sh6I_Yc_djNjGR4I3v5SRUaeaDELjzUgA4FNtBV-oN4KSy2vbkKUUxXLOQYrhRsagS77_ZQHHlJg84V2jEZJrQDxNQfu9gSxfieOKFbojCHt5A9ZUHnOfI8fjhO1ihDMfT0sWl74gdvEmDMZ0LS3qYNsKnWcJIQWD8pmle1_DQ-oILtPa0iFe8JNXDYFfquYoWWur7dKm9Ah0BrU0oBrN0NyGF5Dm9NsoQWsS9ADL3pHQbOuyhbCrIEn3UCWrOpXXwSHUzqsoSaanZhgjvLhR34xzkbAqCWptu2S9wLYWk4N8Z4Pr8e9EjY9GpY82pVMTXm0LL4SKCudAkh2Tdz2lZ5qq0EA5hJQXboD9xslIxPrsQtyv9Rr5cvB0u2z9CRwZpH0zLD5dlXMQOafs693Uv5ajOHYZLDomElghipIYm7PzXGh79bjUig9ZT_ggPPiXRNcnZnBfPA4khi6kDcDAY7fItDgfpyg50OjmXYgAhEObYqJ82q_xDi8xns601xMv4in_-9R4A3JCHMi9bVSQItgarnaCJGCdozADPGfkjWt9WZAIjOSECFtIYMnq9rTEA=w1365-h666'

    },
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAtTcLAOUDtsb4uBb5aQ_vLrhJuK8efZZB5ACVxMrhftMff__tKzGyZ48kafVKNqweZC35Ttn6E8Y3qWQjrJUt-8CbdKvZZvLq2MVs0VKpGRFu0m5JwmuFjChQzNd0UrjYITBCOE-s97NgWcQRK6T4rP1qBDH7_2TTlFnQ-d9_SJf4wMCHQLUXnRTC83TE0TaCrtbK-02hOj4h_JQ16mpPiEVUzB195Z1f8MchI4plDRPDCTPHuCMiirf5BP2HTkfmjriyyhuvh431jgMy1vK_MEHzYnmZP3f0fqaKC_8Y60r_jkTcyaV9aGFVDym-nDBRCkUYi-TDDdr2t-3KzVirKdoRh-pxLXRFeZ1OhesqIQ0hbBvqp2TCn-em2LztccgfW5-wHV0o6LEeKTowFc4lNe4fEmRzc_VtwCvoE1PIOPSxIaT5N0u2lf-7Mrrugsh80j0BkYRXqq5YmglFsDLmUisl66ouJYD_Y6qarCwp07fS56-eNCm_nNLH4gWA72vdLtCUDwdePA8cSkIJw_ADzzzPeQZ5QWlTiC4yncsqnp5fA7Y8eiPIz9nTdGNoJgLhD5y-Yl8E7N_hKgxOI53yffK0vZIUwgrEzEad7H0vlVy_tkLULqsFcgnGeD3z4fc18NLNOpAr5qV2csiEus9H0IazmIwgdXCJ7AjgYtEbtYO9bieZeKphGXtaWRkkPxiuVR9733ZgMO5ZtW0WtPmSbgv9q1evcCjkmzuSsFIg_8UUAiRKF-_mST97qcVXHf31dO8fyltAq8UCTLPUhHNPIDUPaxf_e34_PelBgM5xNSCWaPkbhcU9o7WwuhJuZACCxr979wK_1wZEKkslU9H1bX4FnJ-yygWlx-HEbzUZewS7-_T5GBautsrtZhdFyMIka3Uz9_UrQYyoVA3WTdcrhG2J2ZNqyOlPNvzg1k00-xUof0G3Re6itcI8TyZivJ51rm-jZ7vo1T9JzwPa3cROodSNqz0QsbQsWZjRn0HClq0moYuAXbiXG2FLdHxr09dLVHAgiNmNctd0pRulGzIn9s8I13SnhULOwpD3_3UP4wcJ8b_0HWeAZPv6DKi4Xga1ph43lcQmMHKKDZjT98EYJUiohCljUXsdXYXkCoXBnwZUhDxaR-4kvP15pmSHmcZ_GQPHhblCYIJFTlg57epjUwTIKlULE1ZjBucWeo5KRyPfxE2vCx4dToq_jimG5okDOD-QRmOfqBCTtZpT_gC4LBrpNNjc_2H5mWf1vLstAgaAB7OT0IaC3_0LAkt4Y-gnD1rEAYrU16wtzO68HGRhuNeaEyTg0yx-RpaOINj1A7j7wUDRRSiYWiH2kIZERduvWwEzAsfKzHmiN7-GybesawDJA3y8szev1p6rtLQi7PCDodtS1DbSeK8JM83918_UYlDEYMotJoDOzXz2LZKhoqtIEWc8viHFZuUPH6ouHfCb2vyHRYPj2OaRbrpz0FcUahmCfK768xg5ND8RM_Q=w1114-h666',
      delay: '200'
    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0467.jpg?alt=media&token=bb240548-97e4-48bf-8989-745467dee0b2',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDOeCqhgcH-_pAy8F_fUR0EBeL7GH1uvWbnhvO-HNaA5iDeKT284vCtfLYmSIzd40bgieQYaTey3uG35O0aqg8dcnvkO43raB1--SOHWxKOm3PMjglpKDQWSnp3mmrtkxNINpwQhNvIgbE1x8i-sazP3u0RIqrerG9LIRlsyK1evSUzN48dHPNG3eb2BYiuzBmq-BiFyzPlBVzc3wzgm5BwfizpuqdE61jOBNyUgd5b3BKpDGKsMW2OnZOS35BEWJXb1OGWpwWVY_aneMcuUFN1T5WnM6frvxAoZ0PQmTSJmPjeW9QpuS23s1LFfRXdXYBdkomHhULaMB8ikQN-fKcGL3HWPkLK51frXEeaJrFxnBAqIeAJsOc8gwHvSKhhDVyfulnbCahdu4kDoqGioNIZXPPeqB-SdLLjHpbhEMZIQaNU0oJuIyU_qa_opi3DDmwc1ivxXmUlbgWADF_XC6SEttUS-7B8KWvfcSCxXnDmo1_TnRFiOJVTPb6rewHpLP1ffwMSuufKay1LtMjE4BKN3fLNrcc73RSXWSBlTOAIEqr76MYY0JdZ8TrfHuzMIW3fxv-c9A9wzoPr7b5KrEUQc4L6XV4rt0_qDWxNWQ7iTl_-QXXN4aOe6DPZxhkCe_dNDM0EKy4xu3rB6W4YOwvFOVdD02ajIVdGpL2pANW4s5wPxRPeVw52TGTRgM6mmWiG8u6_s5QdqgXAFOAl6EubxSzpB34BdrE4eeHyxhon7Q_UqaUIFDzuGbIem1rDW6jvhQpCQbggrhgR-fVv-MF9yiHRuBlrCozY3-TwRDEhRxycLcq80FEfarosPISd0fjV6e3IUbffKSrNlHPOl1r2VC316Izze0y02Bf5UyTfy60hz5gUDYaqTuUyv2FAlop1aWiYVd0crre19M1ca4IvTvEJDqdTlCBzo-LzskdZ_kWicO7lISDWmwXwfESEsd3s2ifdhZ60MJWCtWF1SnG1unl-bOmIWgMFp5NY7HbKPPuvX0GhgYk2kYDC8Fh0KRGiZtDgUkkpSPu-lxy63-LneZAU5DZlP_6OXDdfw68oc3XLTRiPCzrtX8-cX7IZNJBWdAuCku9tqv7uEm8OfV6RaAM3B6B45S4hyfhGtBQId5bj8ZcXQroYza9VS4utoFLeWDuMDikt0Le-igJ1hZr8ximJ8uR8_0F16fvDaq6Yjz9w2QXMgtY--n_MN8Kqj1_sBIb-LR5SQA5dK-tuMthSVGGH-j4NK_z2sjOHPvj8n_i0MJM8lMEsm5XIrMSvBxmuOKHuDbrNBlGg0UwX9fU93oZgffsBjgfOmZO50ex57NAegtl-KLbTLWsetKeaumOgY2PfA2S4OToaVQacoHsVdkUIEr7McU_Mf8qhApGMzBzD7cqcNglw1SZTH5Q4dpVsjp6OoyGC_JXkkYRkXdxGmSwJFnSKmGROXTdBDC8Uwk8K4udx3KchClrVlnRTUPbenEZ1mayZquKFW2irtA=w1365-h666'
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0470.jpg?alt=media&token=06e76cf9-49af-48f1-a0ca-458c730d926d',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAW55ijsW_3_i-hZzJAlq6rD7vzg520YzgP1-Rh9bogUKEBRCpCH6-D8y2ZZ4bJb2ZOpGfmnCm3KNy0IMBAhUftCFzVIu6Fpbvdf-tHFrBlK1R9CyRqrYussOJ3ANaX1FkNz6LOQjYvzNn1FwTo2icG7ZK2h1S2a-Ks3HYNatVsAlliIlIhM8lVzJUOKMRpnjDNwaDQjAQNfMF5lXK0bgJIQOrCdRNysj6kayKdRjBrUvKn-vlV0pR2yik-i-iXTxtzFiZuOYGKVTSI0LMx7wvdHLUZ-kVQ8D7pKu_Xtm6r045zavtdGJqS8hWbkJ-cS05e4tXdGuNUbvU6IQnxpICfrmDEhUMsO6Ir_B24MfetfS9MEi863x7Au3OMf6pADqafXwzr13x65-mTKDIr9Sniv80d4BnLMsF9Qkp8UXFJICbnG4LZWuqMHCzbH2QxWzv3wOj_CDKLmsVVlSroE1bOG5cD_4KEI0v26tUDSvR20Ed_s47mE51PD6NU9Isp7JEPmrA7GRDXBKViVHWlwmQkODxNjjXUDGD2u6I_1gpkGsLeHNB7jUM54S_cM5Z1RNRn8v-Tyzvxi-fQwpuEMKLQnz9kbi8K8NHJSS_QrQNMqDyjEwgIQ4nZyI_A1uKqNr2ahWZSppqg_Af6gdKsDVo2JX9I2YwsXgSjb1e_OAAouauSJuyYn4nrXX0ztyJvtVieteRzCod-ezMvKBfeZmjy4gGFbtX-A9jP1m25t6wFwmlVir6Dmua-S7eZFabY7epD-A8W4KamfgIvmB-AimqzMPmTr0O7qc5qoMsQi8aii-vKAix7vaDQCyX1QsACV9DO40Rhc2vx-zkYIqQ32PlRYymSHOaFcy8R4kx9QoK6co6LdZoB_zY3s0ZX5FRsnBqFe9u69fd25g8RhLcLzWpzdv1TaRg33ECh1xScLapGEgwCkkIfTbBTlHr3FTtIHl5JtfazyY1jGuQQzC8EYmNsrsjNHKbh9IZk4MB3Ii_tXwzoB-oYZKImFbh2CSSMjEX7Y97NVDjEKbyQ-eZ3nogvIt7IdOe-uGuj3waCPihukLv8TBygYlDNcyr2n_Dmx1YD_LqaeLu-4eWDyXJ6sbcHOnca6t6LsCBhIBp5KgEb9DDE8Wa-evLWST5g1yzRNJ4QM_YB_06lrAcgns_-uqZILvxhjBXF6o0AWoCLFab8lV7iDpO5joPVnPXLtPDQgBGg4Qaoygs9ELDBueX8vJzRAwkl3majP_a921b20E3XEeK6aY0eBCScp5-09KykO2YuLByNwgmBPLM2n0IhcQvQZJEYo5nzcRxW5bfhq7sO9pzH9mBhZhoudy8A037OO1s-82XqglKErKw2i4Lu8y-anR_sJcHiYYHm3OgyvN3UCzAiWQC58dQqaD5Fxlt32Tcmc01BKwIoTvj4yUfVGqfB0EgpN3lVa4N2YtQ20r7NPEoxwANBKlg9BQlaiaqgR8zHvEa9qnojBhG6RPHWNA=w1114-h666'
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0471.jpg?alt=media&token=75964d70-6f9e-4002-942f-b8372849c8e6',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCXbJwP4fpkALxirtv4yOqfI3_kbp9a1u7O1_D944i8y2hbNZD2QpOJuCtLgahpbdDw6ZGLUJAxwD_KPNLi22Q7Q4BLOTmtPeD4_idaMLFUs4XUYXKPllUzDuNRW9uybnlrnPNanQciTwY7XgZYty66a3L2BwIKZ7qY6AXj-2ekDYWQtGv1zxSb-c9dNs9fDHd7Px0ZjHkprHI7MRyFWaxaJJ8jNCBpnXer44c3R1TVR5mSxAVKz9gXuDBBWBQqHlFrsWKjdhz037KoMdPjZj25hSU-LEBLTdI2fPYleAVWxXHw5oTgMhcmwHh4v1h-U6AuqUkszctk0pZIstMYv0dKaDCCJDM2PScvdMbAgSFBwhvhTsKgmyKFwkgYV-10hcAfW-ae2uhbW6YbBaiiL9VvNx5Nk2lRwwX-BgfYy3oGTnagYnDKRIoLwRTZHZI0mhaVOUEthiscDAe8WjEKayUuA7HbC3Xhtrz0UiwilL8ZpZ_aiP9zTu1nITohEED5Q-b0HPjl0OU5MeDATGqHZOjUuu5F4dUoxTUuHag9CllJXCzswOU0zI4tfaCV8TTqZNQW3f5jKSYpaHYIIFe0iaNdhlY-Sq_HkU92Tuotc1RlTpbAWpZWpOPNYayyFvWFu_w5_e_u_0SQiop_6m--RLi7QJl3r8lEnyXKHmahWbkl-47oS3KJ13fvCXXN_9jRIXqtzzuimkjW8tgWS0EttrE7aL23QrL-Qww6On6AO8GuIfAdk-bd8U-1qTXW5F2cDXKEy0FF3FMhjJ_pVimGJgy79aGKmTraxBK6FcwsXSFiAE8weQ3rRencjfZcReDRaAH2ZtVKZ_0y2YkL6e05IjEL_QpbUqBcxI1acK9hAS6LmCAzstt2JrloeUGh_hSGq6kUTdgIiLVOj9AxhW1Ze58_EX3bBFjanxHm0N9ZlOiF9UehE2N7QAJcERxar-V7jio4k_vp_bbshbdLzPqD5fnjdT6y1vQDBXCJfiPEXlz29i1tj5W1wvHYtcnMSBkNbNa2WspMbo7z3B5cxj_hkieAlMABR9c1BqCunWkvgElL_hpgUNl3UIvheNouEq8aGnZwPEkvlsyL3nf_RlN2AMuINWmOGozPldKecxor5nTMSJSPENWCKy3Cf8RnRXjzqbiVAhgqQZYUDr5I7gwTqSaOiLYTq7x1A-ryh0UlAoL87kpg2cwLpsKz5hDQ5naTOlv2WePDhiKQ7wtfIH8-0oipPjW5qAR-5PjrDv_pLt3iPvKcYEyVbp37qLSc5cKigi5Yw93NWbDMOTqx6Hg5HxRtF4AGwckXgwEwTFt2GBiMQLLQEg_icPU4H38XkxlXAep88Q0FyM_WV1vX3g1i4z08S6wHJmMjyMr6EqOrKqO-I5EA-SAtQV_dzQt1svJ1uUPCfBSReaybYFet0E-R5W4vzPJQ7F5d6BgbUWKP6uJog8u4cP7j-iR0JCbTW2ejRZoJqSY-oq-4sH13CPLLhA=w1114-h666'
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0472.jpg?alt=media&token=71df04de-72f1-40d6-9d6b-cc3c1acade3b',
      img: "https://lh3.googleusercontent.com/fife/AAbDypCEo7yxO7Tcc0iMXqPjOFsuxIBBsSC7WPqN5U-jjYIGsEgBWjbjvH7c1GewzYm9XJPfDH3oAbM9qdm4nWDkjbcJ8mb6zxL2jRJNZnAgs0iXC54zxReCS-hMUm7k95V1FC6CnLAZVwjzSIkSskIrjtiEJHuu6kJmpPc0oQLXobFCBeVLxFECe0lq1_3lnc9oqMJCIAbmLQNtNlk7D6w_a50RzD8N4jP_uc9F7wyOKlqzJEp3FtW3SFoTaczptVq72SXblraCBpGVbpms1a0cggJaWyNqRhZueXXY1D3gpcA39sxY_atjHgXeWl9lxziXLJd9oj8QGKOhi5_QcOzbu3a2_LetNdnHyeJlIXt5YQZ8QCh42-3U76bLsoJ_mWibf89VK3pF8bMJmWPCfHCFHf3Bve29jeudh9QBnAf-Dhm2bvt6PDnJpjiv95t_4StVGzE_73TXySebxdsYWUFSDG4F_Mpolo97iVEd6cbFPOtkpeIVJGxohp3ZAywfu-4AiBMA3tN3DlypzudgHdCNBDOYJdIkF5E9Kz-T4kN8OPRdoVXvxY5dNdR_MgZ7ouMzdzLCD-v3qy7xDWGmcgXhyMlUmDfvR1o4UaYf0pW37lr7bnNuKVcrn_N2tWs3PHgQLTvIhHv6dScBE8fH218MNDnhq-MpMhYhI8E2FGpRWn-RT_n3dymws49viPJ587NOd5b67gWFoe-BHk9FZ_ov0_ddPM7RSDSxATRbuqeGHXuRgX27V92cyrSyC7YkZucdTBSye1FDkpr8rd9lpD3AmyCxrgXXb29C-6035r2-axTrAKXUkvpDl541TgFM6pBASV9lQph1dtGxp-vof-ZDMl72ZkPQdGeoRfKudo5kWBLp3qshbGzCyOl0xlf8AkkQbohdUIYd-7CQrAZ8oZhaejDOEJSNCLKpclFfmfsQjwZtPBzt43c3vJVx6G2H1OdeUzw5KlInt6jGyaHda-JLLtA1dOeVL6iRxSiRxhlxz81pfas-9x_FCimAw2HrNr3wVeWqjtp26XYiEomS6VKH-vq_i2sx_wONb_EYi_iiQtt6fFz4JPgQ7eBtrDCFejKo5ksYXZ_CS2-4-CMSVJV2bFwISvhy8YaPsZRxD9Y8JhqdQabo_jL8rjHx8hHtrr2oHtbn-erxXBlHcUjt_bh7fHoN-LWX1-pPH-fZQsGHCLALRLdemCJJAZoJT7Z7AAmCjhYtoH6iNwc-FuHzAnIuSFoKkOuwk2jNamHZWcOEyvvxbF63FDjFWzhBz3XBLJSPCkkhlADFm34mwK5L-pFsf5ywg5QcBQZdE8h4_xs40IcAvkXrZEPhysqsRV19-2tFGkdaiOw7iTe0lqY1RnFCF0YPE5nT1nFtNgvGyHLlNWBw5ta29Q8G8zWzduYwlO36FQHpW1tE2WimlcDzw4O7LGEXfTxoHc-CYjS5DgqlyjAaSn0dT4ycqczZ1DGxn6-Wpw_BPiI00mYbWDX-zMctWg=w1365-h666"
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0473.jpg?alt=media&token=beb86a6f-f30a-46c9-a041-6132b934f41a',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDH72ijSHO-u7WDoPQ50iFpqAVolUCnU4Rj7ba49SFj5r2dv9DvcCrJgxmSTzry1MIHi3afpqBQkJ3_xLhBVO7YdSDjg-bn4vOraGD6kY7pD24Pls78Buib6QEQ8_mQyaTu0wUQ0FX4mPSAUm8peihqiyVXQv75RFO93TcScx37WAHZ75SKGt8ljeZuXWNmUwFLMVShKvJI7_a-DdFxxEaawO1FwDloHt7eSwbFH-zwPFJShTaVuDHveBhuQMvNbVICoQbfVbFGKOpBrqQ693jrCF6xuCjiOq5Zvhg6UmUBXjRunvmaocAj_8fkzNB51tkS777LwwtAwh_mI1dMDBSKGawFYvz4m2zsUuCHuUhNW5JJQkDlypji95djmiHtza7CNORM2A8SOnMfMUq2878Az84dpxYBgry8abVNF1HxCUj0GuIUifnFF2qbrppHcYgRImR6nOLPq4wYn2j5mO7VGZhWEQ2fZjjWtfjxPAjWtxpRc4jzNKI8fsWN4cfCMq7xUIoA3-lzxWud3JB-A0Iq-ciEQbh71qkMf0Ci0zCTx9jyzN5sU3n-wHYf9v-FZ_etT828ekhWhjFRZ1WE9ema-ui07YWjSBTkelsWecxr5-pHMQyhfwYYn6SkdQNRUhbT0viJQ3rOvdC9704sFV_zfCDHnMOeNGRLZXgyxvo34n3Ju17a7VysFPepbktM-vrzjdBLxdwfSPGrmRZMCx_twUpiAguHOumP3YXHu4JDxmwyjs5-exJ6Rjiov2IfhmFIb67k9fsmVp8U-Q2yIJKKTSfwitE_jO6CA1mUUAy22XH0tpjsA9VtVVRnKmhnkn_bcbLZv5_mZIjm6uFb3VZy8eWrLNPvEyTRMZruZjV3ipCeuy3hWdWE-wpKtVvKBs8KELx-_4GV5knOB66ssiGHfNstx7SrhTQX7cLYdksHcrSkTgiqSZWZdzx8udYcZlLeP1Ugvnec_VpG0hARL2glXv29nizNKb4qs4B8UWm9PFVB4pqdC0kw36vquLT5roQtiHVtE9nqZrypbvoy2lLdfS6foLDEyg9HQ0wiuXDbyYQ9vCLdAiIf0N7BoN6qLSQEo1egPnuvyFFGgVW75uczhW-j5N-RbBDQNFHFNSujbZw6S_kAYv4FnfpeVjE3K5CmHoAsCXNpyuLgnfjDOJl4D-K7mfdlsr6DVQu7K2FR74yzqrgo0HTaFjJjMb9_e-R-7P4OmQkBkZ6BNTkXYd6DM9kCQS2uj92fLKpUl-R8guqjiHy4Fb0fApDP1FKDy8N5QOtcJ4KfkX_mDKwNG7Ip5o6cTy1pHqTmXl-Jk807d-L5NtS71NLMnXLBcIzI2J9IvVc_iAIbYQxp7p2v7CQjgNk-rJ8ILT6vq99hZew3T2T3HwfTlP8ps0UyDEdAyk5P9qTrv_AX0-K0SiPuvfkASFF0V6_Hv_GdPF0pE-4kxohn5QEi5ZhLia6ePLZq14v38UIBUP9N0laRKx_1qQ=w1114-h666'
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0850.jpg?alt=media&token=cf15ebe6-e998-4491-b2f9-78afa9187277',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypB6a08v3245XnE74xjBcwakps-bDA-e-cPp4V3JMAAkt9PY_FeAGgDePa1Xsuyw_9L4R3l3ma8W6v1VkIJE7IpWxXlCLz2fB9PhYu8mFCXmzz-4aVQBvZZoh0EylTTJfS3iG2QpgFiMFWg1uHB6XPli1WhEpYHrCfS1elo2__iihRqcdwpXRcl2_13p5X089xbJG8NEX-3rhixnLsZOUWv9FTpXvMjBTjqErzGGE9qhK4S5MIHkoFSqG8kRJ7a9tRJbTIny2gdMf3BMSiAYCuaUVOvVDcoY-PDTtOwlo0Q2eo0334PUlpPWiqHwZkbQx_i6N8lgno3osrjy2qQJiSWl5xnUaNbtXZZGyzp_eT9hTw92k3_02A6IZwTAyYJsmJ5RbnqNhkglNXFHZkhZFdyAOTK8F6BEtt43gy_IKdAszCqnDB351vt7G9wZNJiXGzlwQo8D-b_WWFm00_cyv6YaUDzdmm37lOCL_lJWYtoZNLVcbYijYr3JX96kpSMFKpASKSY-Hv8Gv24sWUveGr4gHS33YSHInqETkTUD_UuJgrARCG5aUl9_kmnmmxCrudvwN5qHVvun61BlJiAHkya_UNfa2Xip6lw-u07gnNvdd4bp57m1lSgXCv1L_Uu4o1JnNYjbNjOdoPDBogClTOxHwmsFof7eImQozisU6Fj3VgI-QE9OiibtBEYcnXjZWlNEKjdk-hupDBnHHDrq7-aTY69lnAe0WGVtbOWVSALY9DCqByjw3C2CwGJV7IL5y0kLVfT_eFYZ-bzuiC2_0w85RZ_AfIGnoNiqQKDMAXn850PZTuVnRX9zab5IX7sNRFksllfDxjbnrUYObUdYRuZRvccKkAm8Yf9RDQLf5E9txS7KVsgyb8OWofXLcnoOuXTrR_4AG08woY4Hx5W7fe6vOoX_kz577TDIXT7uHnIag_nwncSFr5hrsXnVuregW_ziYd_4q2_1pb4cAvAgeQFoCByPkglhSOHiiA1p6Isn1V27iYLWbFKYYpIfmBn4Ac34ohM_GmLqhJnvZG_MNQ1-QGTXkjGKr6yORDdDEyllypDjkrOw9jCMorF1goZ1romHDc5AlFmUYOP2UJms6wk3X3Cr86eog_MtHwsXy1gbH9dqccE5xnUMROqJcokv_78kmXYuHXtJ1RIQh1AVhT8MACmONOVn81xu2UEUi_SE3f30XroQk3Zfmx3IpLnAO1Co9NhZN_88aSsZSEZyDNKWr87pwFbctjpH2moDRNGTEYLsEoevXmDyc2mBEytVgjdFoA15fEMOYRCoPyx6m9m6iAbJYEZaPHrkHFxEs7X0QwGLih2V0Irm-XGKPtNp83o0rr0gNXg3_pNf15ylyZiR_ZJMSsWSEarZXrs_V03uOOW2sGnmjqX1fC5S7EEZRS_mZnBLpqLFmBZcgQleAuN97HFaIIOo5qpl7Ffv_LHEF2-SW8meP5mMAwuTge3HgFxo6JvZRjKLq39mTJPBJA=w1114-h666'
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0878.jpg?alt=media&token=1f378515-19b5-4fdb-8ace-bfa2178be1cf',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCJDSbqIRZq-8xqyXIA7hQALnio7UL5YUbFSqkhCRci_TpxqNkdlo_dOaHuQX5jP0eVwFhEXN-rh2xFHoVkZvmIhpdRIOmc6wlxeXdMqMRWWYvK8k4HJOc6LjX1pNJlR3R-c8xtbXfVGNQOF3MUTvJPjg7bMvEWtaGAzV4xMmLBNHolSIpR2k1yeP1OGKcREQ6_87dDzN2Dg2JOo-2rTX6WwU3OtBHgcjKzH0mJX_9amKF_HjiDMG3p6hY7BxHZ3RmihCStBBwvTB1JZwjjJ0X6aUxfMn2Bgh52eFnO0t3UzkW2EA7OJWaRc7gXG_zLga2aDK_xNWSx1ZoAJOPQSvyqbyCL490IGcoYJkjZTkXMd8WDguI6DoMC7KcPa3WQaa41Sko7RvybKgOcQdKjujc471wYc8JSdHyzUaSTQXZOlgPgT3N8_41hOuJwAipiy72dtpK8RH84nTyXkNv8DjzmO16tXxyKUj6fcWxYOtCPt-oS7W_MHbFRSsMwBzAqV-9N7FkErZup4ZGqK67igc7iSAt3c6dSpx6mGaAVT2_cXh4as7mGoiGF7g9XtO_h0CAiZBZbA5UV7tSgEmbqFtPx0KMZ9D9N6ma--ksOKDymEIjU5pXCvGsp1bLq7qYP-0t85xc-m_iDdTQ94f4mi3iP-dyLl5wuIwJRcbyJk-FF5HUCxZNbreARO8JjTsNzD7i18MxPFwh-LThIvLT_VCO8ft1hbNWNdJZWG6LyVGx_YD9gJZZNpk0INJMm-qFdmN3O4GrT5EATCgOoQkO0Ccu0kTr-w842nkHiC0XhFtqIvyTnAALynMGFTf8AGO-FzZdafojrKE16m6wdC6YyK8P51tqlIodCwYczU9PSpUP8R1MOVYl4ldTpLbdFx0cPu3TtPgWDXkT8PWmXem1DCqgBX6xzgHiwp_jKkMe4BcDg3xOnrJidQ-EuEjItYceTqfWRsQ9s-yiFBZBM1Hj6q40gwrGc-XClG1yyFNHQ9AiF9i_kbZzoMd-lQSgP9o7_tmbEFzbgkz9zT_8okd7XZTPy1XztJIGltK6nxPVlCzrp5oUIyJDrPTJ3cr761oko4wxlAuKRrUfSqUAspfzgM4QmsGi4PDls0Md7WrOHZS1MOdVghx88oWLIVX4GKd4fz3Jld4gQ5XhpfAx_t21cC4TzmG7Omt78CregSx464iMe0rYfh638_jCucs0BJ8EqPyTsUyGLzLcbrj6i86ZzBTWGvzmUcWUpVdv4mKEQhmrqLbW-rq6OvmyJKBj40XxC2f8v6rvAxtVPQcBbnOv3nkxrp9Daq64yaBBo6V0dVZ8esgJTsRHcEIRiuRhDnae-VtnolzyQZiNZ8X9DKAcwCqCK6ySb5BqXNnI7s_UbUG1LtQaGEs4yZKufNhBoL6vYgpqnKR9B25q5b4jNaqh83GtEM80A-aHflEMqSKMZQV2Zb82neBz7t1HRawSav4Knbq8sYQ7eBcUao0Vd1_GwHQ=w1114-h666'
    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0881.jpg?alt=media&token=d0d2bce2-76a3-4dcc-aaee-81dfa881cdc9',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypARXXder_ZI06bcWYnqima36sZf4jluolwCAKTQ9cvhTRbfEciLyLjzPfHCrYp2ZdqXAXsUGj9pnXKSWnIJk7xWNlx2_-EXejymhe0iTG3ArqYNGS4H5erc2-WJam5TryY0FjtkrjIMqRCKT3oHPtRrTCw49FN0nlKLxQM_gygxnuSIzvjpfvNIhIBV7dbny0HQwlORym-7w4CvkKS7Uf1t_n-dlCRZ2s-V-cfrfB1Osp66c5beYbfigZ3wRYuo2ydhnIk2QBZhL12_Xas5QiqaJi5z3WTOxheralEUPtc9NpWxrV_y8MzKUgjMs8bg0LzxiCtlmqUxmzZErmiri9dcjdyyRFsGoYb-wrCPA87svO6HMNxgG_WCmQwfTEiFjDxRlWl98p6WMMhfKrnM8WIJk2Okg3flk5ImEJassCCGdU4i3tJgcLlySlOzGFQ9w8vonv7fSr1HrK-P5SIqNy3rjkhmgHHRfhcGmzYfml6HHSdUeaje9tc7Xro5YR37wjONTdNIuYL0d4Rp1lvEEO9roHACyj3O1F0CPNNzTjNOEGEG6oC7u5rXBSfTzsDx0oqh9S6S3VAO2PH7fsBzBCxCJf49DiSApd8UPzEe0kcJy7iqonG7jpa8nMo_bCEf2RomRlNNB4833xDo7ilacuFSnKKYsgiCgWZXHEc3n3rzXfMRSuQ8CrP8jeiLMMKrflSieB8nR0hwMlnXWpRuDIIRBLyDn-fYo49qoWlx5drwRO2bU2oo9sRORVUA02a6tsMUaBc-5AJq7OURVf2u-QVE94X8naH0vsPNd8cRgIReSu7dqAfvhi-pdYX8mPO9ouAfq03-F_gYR5s_qz5baX0_PW64tfE2h1BZVhjkmNkKewsRryaSoev1GR9y_8XICeEiQsi6bzHsanzR1hHRhLqAh0DuTyTuFBtx8875av-JcLQKrwSaa_GRyGS1x99egz5M0zNuLmPVE0FBgtxHONrNDNgh2ep9tI8T7CrKL3Uh0CnyK1wlfDp6tGSchzUAmb8Wys8OzJ_8ddbwblX9P626nJFCq1pEC-g0E9VqqAg8MV1rY6jGfIAWUWY0hdzq6fg1pI2m2Z2CGHrq2lx8CuAJNQkmRxehMpUtChzlSbZpxE3ubv_n4GZ8hI_sVwQMbHkRUoeXeazOXIBT6tJk4ciRDBYsGAzMdJ_5l2AxF8Iq1nqMKqO_cyCoTgtUQTLbKH55xa-HYs8TE9X_xp6hpQZEPZdmpehTkJO4JqZygt4vn3oRconbaLwcYGoH1BSEWscX2cagCVpDVqfS0YWR_1jBm6gpnTgh-TZs5uVJvI7Pas1VatMI3N3lgVyd3wtfbNbEZtcZZGIS7LPiMpjD4WDPNNbWZs8WUOXYCGoAUbWC3nYkvQia0mXy6ZUW1qudBViEuxC-IqITbgylMMf043dCZGxi2f2L2RuQUMaVlkefsgnLwOr4Ds3YFZcf0IX_QFUOoOvz5hcDZNcP2gcj7A=w1114-h666'
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0885.jpg?alt=media&token=4a419620-ad6d-4659-bed7-2e6aec5d0d22',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypD8H9WV-OdaRIhZf2OklO2rPA7Puv5WqP52YPzd65s3Du3pvUffDxzpjrrGH_44JlQyudEaRkxQa4oFrgOokw1QTrA_3ogK65IL6h0e4b156dLZQdCOpEhRl9AbmBvs2g5CjH2PTqZumeJ103FHj6FtE2CjsrLmu2AhGbBbLRi0OM-qTo-TyvCDuG2bO0ruCLVQzneEaBykO3TspJ8I7dmMWpSw_TViFKmDxs7fA3NyI3h5-38znH3h__dhKF0FG3GG24PRZ487fbn9Ma6fpAVJsCD_OBoCXNf2_F9-Gi5xLF68_iCIR-4UIYRglC2ea3EvDB8ki4iHoq5MHsTUmOgzxtm8njq9VEJT622lOYaNumCc7rxJkePdzwxkCvpEmUifziWe5mblu_ZyoxdODVQWz3CMEMPQK9xj5TysHRUwWiQi1JZFk0nS2KxxjDgxuc6owJTOj961UvLEvbuljSJ3rL97uAVR0IS7oSgtervduMSRMTSK3vNQHmheZxDfAaoPvOXgBQtewpRzFKPZMy1EC7ddWBBglLW0AZNHzcOk940eQFfxATuOWqzwDErMxluprmWnpHgzmEzUkVA7FOzwwilpELMWnQcX-4uEkdiYZRKc9nM0wfU0zR5gEusK6QykEKLJfVREJw5_cuC5LrH6JIWesSER6fZTZB1WX7AlkwTgaEThiZLTplRF3slFC6kkemuuj9K1Q9ykeuqbNdatuHvXz02uZgq-1h6o2jVDZ0JcyiIiuAcowQa9JMbXAd3P2asQTvcWE0buf6RGFbCvoagK5AiJwBMQDHcKiyotdQjD-bBkSQkP3HhXBFrQXadmO7juWmSI_i4dDPc4a-zqgOaiLHoiulbBzil-xgub9ABZh5NGOYZyClETahcqTYD1sFWRn0AMoNn--6fTsILoTCgjqs3oAl-j0o0wodEd-WL1vvlDVWu9Y7irL9Z4rIP5fSlPDSMtiMtzN2vmBYUAnLBz8K5R3PQV1vrjSl4mlbUiOJNFkRzIp1guvW5nmsXkF2u7VhLNwf2l_KOruutFxPYnR9bu8CkaaDORpZBe9JrfWM2DDjHzVw9V0WN-jg7AuLPg5pOHlSCXb0cE3KH_Ua4J9iMx7EMyTxCqrJsdVAhnFAL8OH7ERaYvB-WYdI4WrYpBebpQt7UEvaGaqPUGgCpYzpM-QlgeNc1j_8WgdYPZgkCyQZ9Os-AOqS0k3wgNGE0JLPnXjKwMN1Jnj2CVbNlU7xmO9_3vTWAOpXOpeF-empCNicxCkXX-WoSfbYX36RVyU9Vyr80JvML4Ch8WU1k6XM8tUspFwH6mKH8ZF0wuGAyApYuhWQCgBBOEz2jBBldj-n_ugPPxgAAVIAI6OZil6TdhLNyjH7d64wUTe8nWVWD-63x5ooi_IZdRTOG137cZVuv-VIp0H11lVyZ3KB9ucU5BqZZoq8-po9xwB-q3t-4HE1RFrEy3Nec2kaRjmuFEo9irsGcpQI3ZgA=w1114-h666'
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0890.jpg?alt=media&token=ac4e3b0b-c190-4e7c-8299-2898824b3b74',
      img: "https://lh3.googleusercontent.com/fife/AAbDypA9XW4e34zPPk96CADQrr5QjMgT45LnOVv5LvVViSsCRNMZpKV3tPClknj75UX5FRNQaNXfvhAefBfqHNRVdgQQ2tvs9kxZ3aI5xue_stxsxknn29htK_7yViBwCpy0PIvHZgzZfHlDPGT7fnsw3VDIBjNCpq4MJ7QGWGNIrPeXpRIb6g5PuDdsB2PAb8D8WeTMMyga_xSG7kTKwzJ_WeSIlplcqoxAAwWVGGkF9NZU_aimPvgZQw-JV0wC8S5NER2eZuvdXhoSEkv9L0XG95zsoAiZzLkQZBwOVSOlOrP4Yq0fX5tmmD9XGPtNIYDTCT1f9Vyvw2jHsq3Z_6c4U-bvBlvx6zh6Kkp0NRLgDTlATlRXmKJeeAOO-1xgJ_A0rQV_8M5a8Lum49MuFOotq-oLQKzTPZPXY3WfXsrr0-NrIrarTTpW-CKFzALwRWYQZkex7kujfn5YZrVwSWXvdv-NSLf7jz5HzJP6GvttRfzWEdQa9OQ82Qprzas8vHw7K3t_2LFgfFUZy_QNr4bKLWtcnqfryS5P_Ct_PBCyKEwxdvG6HrNBdzlxvhd56atKk8przI3XycWmQmymHh-s4kOA6pUIK5n1A-2yX997F3FN26NHmi6yLFManIazOMQYTRIlnr--wOyCmWL345xv79FK_SHaY9gCwZufpFmDqwgT_HTlg1oBSu6cBzjgo4StFImNGwO2FMCN6Ustjpd-PmAcQhvOOKPPYUcn3MXutdi5M0bunXFjICFOVzu-OQWuAyInfi-hkjblSwed7UxEl7rd8kYrfpIVRwfEE7IQGZKl8hJcCzIHEYVrwvVbwYMtjQJkNcJegbkq84GPo2KzKIcIv0AGoctyA8zVEyDuGn72Wa2gRTyE4qpvKnHQOKub81El4ZUzjWyyHEz9RHPTN317yMLqysLnJCm04BnnKVgWP4MfgDgGLwoK_DMmUtls60rJUn7Jr3f9SPt5kJ8-MyWnCGVF5_tpSX6wXDnTTspecyM8IZd3x52JlOmaJ-5GTNm733Puu1FAcxN7Ka3ZrV1G-Rwr7qKHoW9lRr0IUns4aMBhOqk-e8aCYAPxisKzXna123r4y9pn1a1AsbxLXbhbjRumxL-lg5e-C3TKJIxAhAXDenF0bPk_hGWHqtT2AF9l0mlMT0a3bIJpUB4_H64CD6tbHcd1vfFzfs-jhjOrlNSZqkCbJwacVsCaRePn_IECnPBRr2z-TzUlq59zWuxLbuLpCiTw_qps3aNI4kRkUAqZLCtcVGC_cJQbYxv6Iq3jPdbTrJ7GhUEbC2adrGSNOY1TgLnRqO7HUxOZpv1TxotNAGFeRPzjc_7qts9HbtGhHk8ojdB6n7jzxfHfUpTkyEf1ofJVL5BOnhPuBSWEf_Lkz02xcqR-LVwlh5rlo73SFDQDJh8XjD2w8v9VwPtKS2Z1bOZJlkNzuGmEnEjohR0RZwpFc5k2Pj_IzDOoFmPlPzbR93_EGWHUjjlGyA=w1114-h666"
    },
  ];

  const MorePics = [
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FAda%20Bestie.jpg?alt=media&token=2bf35cba-be40-464b-ac59-73ed4b16790a',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypALzREO_074MkNIxffhJ_teWsUNJmN3YPIOciHivK0ONegvt7o5oHcXqAekj3EASlmoc4q5bs1081a61K_wz4JjVFUKBeAxbYd5pePilSnig2SgO6X_c5uZeD-TfIxnE1F_6pYqqyxHgJE9IYvpZENQydcJdj3uAW-dgyeO4MfHOpAeLC7LxHXi-gwNpYZzzbNQB9mvJTjo_vN_SFIFfL2bCOTGZxXefztn4ZlKSyQPIUIJfNjtFVUALyXdJxc65nq10pTWHZ06Hx0MGq0iB6QJgxDEoxksAhYu46oi5es0RZMnjROTq_ALdRqqmUH87JDJOV4LULldVuMln1AUAZWh_c_AdjL1BM2TR87S3TVrE8lhqab8bHzJxobM1sBhGBtPzHcsepHg07tZciHlfRd6wq2Wh36PZUCR0cYsq8sJJsX4i4NQc37by0H0f-5zkvHjLQdQ2R2cXe-udFgitNik4L6BrBv9N5UwXGzd7nZC-INL_hvPQEZCDfl13h5lyQ6hRhk4SqoNGts6BJzaKSboN8wVm96EYSrZTaN9BPCaCKM5tjI-TtxnPa588q7Dclo2U0Z-vMdU0LWsh5hOJ9cOVnk895g46MQbs5hYy29AaDWmET_BPwBu8JC5AX_GF8f-atMK4LZHUlodMtph9UKpLYAcTHTysEp2ekWx1kDM2NuwqM8l3DupS5o3nHoivViTunv8pQFx6JXN2J1mNebKIH0NsSojCxMkb7hOoe89HtIGXIiWCkgRJ6bdHLSLaOdpRQdW5SKmO_hk2-3XDB0VycfzrjpD5J4GO31CeEbWuOCVFOTAdPEzs--O3WcUd_D7wM0mZ-8OOC_loq9RfATR-ksQtjbO1zstG01A4bV6pOQ6eLunctv4RbFOxKv6r3pHe6EGye_QpFZRHOemmL8p9HiOprL2xCYWxv23AWEQrLy3aqJRhjfmGKeE1mk5nMkd56LHvMEXcW0zxpva_921Gy6yy4J2ceBJ0OibX8tG8t9q5lwgVR7YpSKlmMCMtP6kpe-hwkSn6oFHoKSH0qWfVnBhhdUZa1v433MD74Hkpe3bh0PxB7wn8xl16bP2VPj86aRD9G-Xspt0qt0RmkFwXDyDgjUchR7ewWMeTDUZt-al3RlHn_28dixxmYKgnKAjhY4lgVFR3uPuk9beOj0mqfr6s3UcPphgTFtXgAAH2tKJo8p_ZgvjKxf0vP-2oQFgq5nrwfjB_9m_oxts4k76dkRNYLioWQifVnMh6jTA4t_QAGKV_4Juhu5cI80pB90W48G1Qy46UOO5CYsqzYod2uCOQUyPwGkP3BaN_1G3NUmbRst-mxq_VC9RAulr-Yzny_YrZng45DseU3BIPgNBOXmFPPn1jlNgim1G9CU3EDNGj59p2e12cAu0FNpv4VMuVdJjMDxuMSn059w5kHwaszJnsjjPth9R3N9ibdf8cL7Yle3cEMXkNwZ6VEOh_pOtbHlgmJ2mOFcSgm4qvw=w1110-h666'

    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FRetouch_.jpg?alt=media&token=3b75fc98-b634-42d8-8118-fab10463bf04',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypBMQ3zRtAJ9NProYcBu2Ypz0uvxQjuQqtX0_GoZ8QgZjnl1n4JEkMnY5AJXtdd8m9T2a5q16NtTxBHO7srOMJAAjH5iSkVFY4kv3di1vaf5WwUzn-KNPDjnsKhSi4wW5LnUmgExMnOGEGINDKvkuPGr4QMwzSoZjrLNh8XPTDlApq1Azn4ZqnqgN5NkXQV3XBgqVmvbvlNIxGF8EmjWJP-4bI6QroQp7fI2O40d6WKmgU5jhHNmjo8knI10qka397DJL9MHwManTDEtdVt7ieRl_NH-s4-bcL1Ja5wy_Fy0XXIW6H9AVxKjEHj3SXGHkTnkCNkaUbV7JT0S8mkPwrLKrC358C0rbDoc1PgFa5ocsvGAu5brwKUCx1vqr6fVnvab5xp2y8W2Z13hlmlhRaLyIEwPCqRch-8P9fCTTr_gAj9MHnu-tpa5a9JdGqCyPdow6nv1Fi68IxSnKnTekD2xL5PNLD705sTuwCsdw399QCmmoc9qhnCnDVfFqVJF1X83qebgH6ugQD9N1jpwkUWZjpiZv-WOIhYk-OVGPIXSiDNDAiD57PuiOIF4O0bbGGbz8sDIhcUStQ3Ot-gVwMR9oWDkVlTN0SAJPBbxaj1LMFM6DTByfxl0Y0opABwY5wdKlbYW28xPhJUdKHgDNUXb0OTEGdZ2C7x8bMNV8fm0hj2PS5eycmeUuXNWvet78ErCyh2L0Cp4bgDbU9THdj4V0Vvaz9_cKrvU4A2fLyUF6nnDD7SO_GxjN6wIH74w8WEB4zuXQt-TU0SQzhLsqdK3EvE22yxryzaSdJEggtLdHVX3p4Zpe0Bd2k-pv4VYZKovXnHffmmM7YrkDy9pHBZ6g-8KyzQD0cvnspyy8YBl-OeHe72VWqLquwoLZfvieJyy1XNIbUe62BsOt-3Ezlt2kn5_dPvYDyXkMX2xb9PUihw0JL_SPcnieadxsrKK0C5ESZ2nxvobVfNNpQYg-mk1VCWend9OLEX-SfbRVM7YIYjqBAyVdqv-hrnG_wmS4jW1XYEGhyv1TMeu-5vM-cYdq6PKctQnUdBosv1SdIg72SXjrsuFXQsydSaQCz8Nix2MwjPC99stf9YGMr1vnkgs36TtrrrMqZbNS4vn-ik18ot_3TMU7hSdH5mYi0w5-8hBgN3fMqxPvKUHM06Ps9djmKA1hotJ-cSYA9hqr9VMAD1p7hgpW7QvnkrMrVevFJg6H1tN0LHoGGL0T6fuZGO5C0avEhJbFDhljoVSaZbtavevVWLLjDeDzRc9UEkx-8JRDUZ0RJurSig5nJP6FfGuyBcL7D13XJ8zW-qVpj6AxKF_VjiuOHWxdjOHsmkrNFf-7Cczk5tNXdQyY948ko6OV2Z_r8TBrvf9Pai-ztExtjmqPQ_XUaAfqFfuwlun0gTocbN1aJaqd5sNs01jDgq1QtgrsafjdSFq51_ulSJCYO9Vtev4dO-uORjtlW9M4RM48egopPeBzU33gtvWfw=w1110-h666'
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2Fbenita.jpg?alt=media&token=beeb5d02-5595-43f8-b7cd-1903efa2611c',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypADALSUmzoVjbFz8PdUCERuOuaRP_2oeYHe26bincOt_j_tpX7hPS5WvBkRZ9iwN6fxgyj2lGVAfCQCBUI-cgmXAEEC5Xqd_jjbW_BpyhxJnJLXjm306--gvrVj8TwF41XnSnXi_y1N0D6wtrA-CmgWBhR9pRIgkMtJNLXlCYQuMAfWZrC0_8AF5u5wUCnZyekcZMT4a3l0TRcRfyyWLtkShX_CmVyWKuZezJzBhJa4_4H_F0zaPjtBu2TD4hBNn5Cu-lDiOrJk9HyTQ-wx7aEospjPySGpD1lDxXkpJvX6sfQoZue5WozOMMg-Wjt347f2lrd0GAQH8MKjtHx6pzSEd8QaY2jafttnvWcHX9qay7fC4U9ul3aH38OGVwK_9lrl3oHunSrpJzfKKpzr8J7XPtZ0aioHddUT6s_WIJbusD18X0vNqw2fbMO4bfpdkiINUYMtc7hBc3q_wbYA0LykzL5-ealmjTeB8qBJk62-vgA9GS4hQDdCskF2BjfC1zH7V-LS7NL2lxqK1BsVtlscI8l7s_SnpQXfHCioFGNubRr8XYQ7ATSv2biMOiDiJrUdfm6cToIuvgOAi8po-pcQqXSgxjhQTnNWUfhohlvHb7EuujtYJLNqfXZ_iXL6pLIgRhTI49ZG9_7JtQHmqKDOeD4m-s6ORApsKMDzknZVY8KID32nOLB9Q8xrIuV49PST4HiJUMfYEF4CvpkehFJerVedc5HcdahpTaqKblN3w7S3tXWCPfwva8g3Oj5EfVeiZZdlxg9J2WJr-HTA7Hr7mbbvHEf3Y6Ob4b88j0LqdhaEYICpoD9GRmaAaHlqZNv2c0F2j79IroiW9_lGmG_1nVVPZJdNniVyPKWE52bQxnddJlLaNw5wdEjry8Xbfqn5h32nsS-FPSN5cqv4F4Z4-6oo9JmAwwpk2To5e4P7pSIsyz7pAAR6DvffYzcf8rCl0T7ZGnDVOkk2s1fe4dAKQ1v6ZZpu3HRVLHWfMdfadKBK6CRzjkYu5IGylxrr4mv9hlP11xpdHSrg3t0t09yETJDW4-57SagLxK5IqQBALsD8DTXqW7gpnujb2F23vUVaPAJz66NDgGG_ADD4jDCBqUYj85b_s2ma0uZuproU1kxPcRoPlASplnE9uZDDbeN_P_ZVpu6Sf4Dlccgw-bgihWVYh92zoF7h65EgxEq_DV9fzuySoZFVXnViIdbzxcAQBs4OM3W6NzeN_rXbtQ4u-TBx6_so-WfMZfDh6oQuWV21mBST5wCFnaCYZ3158oOxfe4cs4jMdbQ1b2XknbTrzAXM_v-4x3zCKv73NF6KAHazji7CQ95SBA3XAx6_ggqIUV09nV5WGUvDBexrxTdAq2Vf0lgcKnpKfU35eNn86czYig_7eTi6oU3Mtu407q5tsBD5_18227DI1b7YQvtk5afy_DwQCvXRwypVim3RoUfgvU2Z6IUi3sYxLEnxIUIAc-c7BgIKSkubNMo8fA=w1110-h666'
    },
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FAkay.jpg?alt=media&token=1e41cbc6-5010-4515-842f-7fe0d95ca5c5',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCWbeIvsMUDtA6rMV0iIFtDrwnL9xdzYxfl9xCNKM_-DMI3j0hjTx6rgfmuvzOdNJnc4R1ry0tKS-Y7AbysHDN3EsLKgEdnBvnSDHQS08a4f52-6BwKxdZKujhVfdAeRyWXfbb6KVE_D5yQ16fmFu7rGQcZ_QKtsmy4xoWhWUvdJtz1bF5Swvhclic-qh5N8yeW5haenZ6-wXjPsdw31ugQPR6jn1OnUyjtCxzh9ry-kDgnMGAR7K7-TX0UHe4jTG14c3dm3OUCO9eAwqxkaUKCH2HxsgOXiaDmaXEltJi3RjIUriKu5avMBAzwW39o7KxBPTgWKnLQOtayd4-mIEDoneqnUU-IKb1OhUUi4GHetmRIZnrZ1zBhF6BygMiOz8TC-Tezp9aVTZuxmf8J-McTKR8stwZob3VM7kCwTZX7XjJffrYi-hQiYJeTdC7XJbg6N6DsAqtF5pWUBW25PTvj3QVcy58LlVzGsZXvnut1i_Cx7mh5SzjGx4yhnycXrU-meUNH0RZbXzmkD1QKWDQ7EyTTeMkHL923aRtDMG8-iHgQzoNxJrJqPO8Ls3vyXxO6RwVn4vSHlmUxLzqyUl2o-G_RgD7J7FjnXips87dx0HfCzwISgqz9V9yxt4fiisls5suB_prNetqJqOOVqhT_tbvw7mxE4TSGITsX8hFTduL7BP9j62-ERBTKMO6HWiYdN9N1kyF3LDSRbVIe9Chm9G_NcySAP3QUYfiN6X9E_oXLWHhcFw0vjQzw_1xn6NyWoXBltckKy940-EXLUEpPEHNBINg4nNFgRHzkrej-HANzBnp1a_s6UCZcdNkHexpXfNVtl6Io8Ric1OebHQp1F1ZaYWGh-8OkJRUvRJ9KD5IwAkxNW4TNJFF29W6pRp0bmcNXHLrhL74H5p1LEARZA1R-xmQzRsjvsL8LsrAicveIlwtxqu2QZUNtOOADlf66gqlFT0tP5PvWu-JP1-b-oyo1omlnAPfOMPBKIC9B_pXMlUy6K2KNtDL0ap4rjDHYgYAHjDDMHQrqk10wGqmsqPiAWNtk79TuRD_MTTZ0sBgs8A2FxYAK-K4oFhhcjYd5vS09dQaAQU11Sf8d5_UlhMv8-SP0iT9Ukkcoae8sFueUCG7IBzZdKDy4LfS_dB7d-RpiWxq0NVWFZa6Tvs3VlbkiTwZPRrNOXSDR23FlS-rnFqKfUabC7VEHIpAeBGIU5pZi4JxCfZOJkYf9v22qGFK8Vw3kCoL41xAcnPgxKsDkZ_T5W8hcWciTycuvOAw0aXwocQ_B-ioJ3nOYJ9yk6Qq2yOfN5g8I5JkomvFpI-1A8i-QSEOLHf6dp7nq2oxIMIVVEEMwBaSGz1uUpMzDDxNxYRMpvYGIIhFEPY-1lRWVdZ5UfKhsdIeMqs0xT1RYeC0c59a7vXTqtrgbN1oa8YhAH5fzseE2uh4PVLN4fKw5fRjrdqNejZd49AQU_3CLNU1_8wUlZahVKR5QFQ=w1110-h666',
      delay: '0'
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FJohnero.jpg?alt=media&token=5a405f90-c35e-45b6-8060-57dd9c5d8453',
      img: "https://lh3.googleusercontent.com/fife/AAbDypDnwWF_TkXMztzpiqa69scpTwGwE4dG4Ns-aWkCB659QEmadWIPF8R-CMQ4FpVe7inGXflgjFIWNAlac1ek8sx0lkvktnzVOBhpvBbtecmvuwrucIImMnw8SjDhwxR-kam8PU49_F_HdFDdKgw-AsMC64zcjVbCJ2QAd1hFxxAFLr0oFdW4Ciyi5ONqeNzJsG1HDZMKZzdiO-34tVHc3Zqz44evyrLWLJI28NiRapxGNO6bJhZMg_3YNO1Ez1LEYsR-euVb66f52WVY3646woXlaog2UH6tdDP7e_oO9BvXcF7gZJTuoeOyNA_DVkG7JRDR0yaIoXXTGrqfe2Y5aCkHEVULh77xvQ49QCHokJYhnGorxUFkcM2TPL07x7WVRlDQIDWpm4EMx1hIslKEocKrZnHJC4J8Rznx59NMygs9XdhdxpSxAmyWBzkiMG01aW0v8Gi_Jt2ehFYlGzegIw-e1CZuTmOWQNrRRk4j1pmYYO69P6fak_Ez3bPrEyJnEjQF4Zvt6RGjpe_BPW1bJDzWDsrTfPWWhLhjTVedYrqGQQBoHWxFx0lBjVkHIIA9HEYC5pXgM0sGaPskGRsaydgvzNE6V36bKK4bakLTp8Tu9uxDLK0BEZB7yDUx9w1kZ7FGm-H2mwUlFEL1EdBxPklUIWNp3i6_FLBIvyLHrcnbm8bdCsDni8sJ3dmfrvrPqUvd9-Os_RXnU9OQGGmGUCWxUlMp_sEk44bfmMbMjUCDMMeAM82RHeYsf4hbNZBMsfxTP8BpKpaZ4-_esq8XQGbAA4UdfhCPyNn0FY9Hjai6-RwG1XrbOA0eRd4pKeAWiSBsZ9UEOUJ2UPD4mgT7gMSMtdYOOx-0rWCLNCQS1Or2hbHQ2Bd0H2zErNf8Ij1ydlqnSwqdiTh0fHVUOIdRYzE_oXgDWZYN4uSSUosME6xwgU7fiI1Z-Q3Nly3vXZ_JCwyZ303K0KuhMxOcI6Rm6BnXr0gUHJJwz8-ekPL5I49Rrq5wMoZ_9JXUQ-ien9VUhesWZMPDvotnP5CZmXXLr-FeKanAY3CxG7dE1l45VgjyvAWzaSX4CHGepw11Sn-flm3dC1uyRK83WZNPUSNq5WEdOw0t-jOQ-g68NjLjrjpHIzqQNGbtDpVwZNy5AIZcSv1lywUkLNS97NLcI0uiz3K2NbGU2HDkJtx1TiNsddV2l3ZR0a_hZFA1-vJOhy6IybsQgNyT7TO_9xcXht-WJNdesE_lcyWeF11KSM66ucwNjqaBv5veA30XvQpmZ0BrUDHF5NCtmFZ3cWHUooMhta8OnQ2B9q_eDsw20Nz02Ve5XakPDH-vOsiGjwXkBvrPHVuLQ5kQjF5MCOMjTZgLmU-zom50DTLTKmMStaC3muy8MuMJet-YzEj4eir9i1vNfxV-qJzplV7gK8mDE9ZxJgL9pghceJ6HMWSU9dN08BuOYwWQfKCgBoYLsACoo51q_sPDTDGA6qtw1XdiTk7rSw=w1110-h666"
    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FIfiok%206%20(1).jpg?alt=media&token=e285a959-5e91-40da-a2e6-de9637e10feb',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDl9LZV53FsqhXZyC5iyPXNclSpdZL9UCIqVBf9gbds_57e1WhayMSUkPfhGm0S6WavNpxI3mmgXady0OkmVJAEpUuYHrbsPhqNhm1wWE3tbJCGW2q72p7XeOK6O05p-oNI3xvBSQlOGsxd74ZCXC-9OiPG60sI0mqya15p5nCj6ytAA5ILux0R5T_desA5EtG7dd_fCtIyR7E3ZoGGH5VCJNRo5mBNYvG5jF26GzUjvnW3-ZOdZUmrViQ6kTWiVsiTQ7jooIDXDqi0e6cm6bR4v9pSMV1AXlz2I1GDmRyviYDP4ayFoTx9-Iqt0O5EriqrQ0Tf84RPdWw2wF9tbh-7-WBwhkhfMBcDrsxBRv9yqywTwrJSoSNsgNh3gZtLvKVQWjX4qCdk5kCIrgl8sTgHJN06F6GVwhsbxvzOutNd2-NJl5lL36SGU9YQdR7Mrpwf4WqaChxvoLPgYBzvdLnVqF_STn4pEfvKEgsZ0v10eWj1RSOuTVorXI-KKL1s6ahwk_Ni_-NbKBsEPpw04_HKdgQKv_UZgU4WAVodYPgb5kbeHsu-8p9SnUr43F35L96RztNtZepXe5vvoR9Gt-sSXv9dr0c7TZyXjGsrGVnV1-KfjBftEPE5cXShRHmjQAXek5t9T4L7RAHi-ClSvoTjol6iDx9jdAyFrvsdi4oe6n5MR2fA04nDW-PnflNX6T4SqUB8kFEbn1YlO5DzF9j29ofackzW0Gaw_UoVqYXoyBRzZP3c2ZtSsLBcX5f9Ava9vpcaeVK7FmDSx4PQqSd0_Vs5P_4M40luNizXaNFGgZokj6Y43YUNS8d7_SW3ZOKyfvyKijcSjVi9ouD4tm6ojveizhthcK7FLhxJfK6uFsKsak0DrN-fGNFgYx-bwR9MVnxIDl4HXwXy18SfPwg0wxaN9V1DMLhqW1oynMMBGaSzmwrxjIqT8HFTec61ZOGoM-K8MPHoFfQDjvkiqauHmC1cfXpD3dkzgpHgm0fp62NBWMGAZ2ghIdSjgzlvGkWsiQ2qyR7sZLsLf6cr1Zl9hf80LhlD7ksyFy9yzTcUuGTv9c-SHkijx_VwbOJoLr4EvszPXVLweKJU_m016pbdhC_0tkN7j-0WP3jlHfe2OaTPJqAPqvIRBgGVxpqmMKF7pmGmGFNsOPiA7l2Bqn9DFM1XLfUvw66W7qxHUwl-1iykggo3OSED5t5c3vjWKHIGrUg17BRTWPTINfVylzyb2CBvWE7-nmkuIawDLgB_FipxYS7ciRuFfeUfL4sU9BCn-0iMqri0y2SdntC0kPOrJ5BKZw0NyxIxYcCrp6mLFD7_18hxGRcFSXYvsgr7r_1BTwc-jbJNfCWU6iejHyLPVPcL80hCBDAbNqMC3Q5fTJR5qfHvf7_yjR7uzZTsXVqfUYL0xnun2wapUN1QNs5AI_7cru8kFfggi9JReAOVdB7wpC5yTBHklwaEdfoiIc52h0ey8WWL7uGbMbCKgQ=w1110-h666'
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2Fportrait.jpg?alt=media&token=1bb474a5-97d8-499d-87a7-a8e63f6dd6c0',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCRqjR7TsBKAPNXXWeV4TVg8LPljo-9k2wztw-OJ5EnJ7ncHigWgHIgHRi-YX_3xmGQw4ANd06BCB83viOkTBAbXmjX9e8jcEK4PORwgMr0r39NCib1QUcJiT0DCl-9A0o4BjERTUbKqAWVx6GWU3O7O4Uh-33cXpdZ3jJhVx6w7Pt6HyKFJYu8PyGbDeUrIhq_BIB-N2EChEwTROa3TnyJv-k1DOU19FvIXRMyBzOEWM5VcapwSQwdXvWWSxdhmgIpsTwfGuiCZvar-9xOw_q1DxZuVo2lcrkK_MyC1dp3fkCGfX-Ymmfgrj_fRnddngMA84Q77zzPF9yj_2wzFokTLOuMfpReO3_yY3FonTpOQlXGXJ2lihp4Kxyhz282PyfBb2zQ_COcuKcTfq1Dmt9aBot_QW6HQOBnn8S7OUAJt0Xa7yEit9x21jgEf-V9XS7K0-rRVE2QCQHA9Q4CH0AU0DOXyccsnquIH9iUmDMK2xWvVBHjyMOzMBVurk5RGHU5HvH6j1lgzxJLAtKYUroiYXtq4MCveQwatXPAPHbcR_cFSQdIDSDmGdUb5TpaxS51C7Cp-9bwUIYKy-iceLCtvzgoTDOrfvFQgy_8ivhsWux_MuYC6SGNl4nvFpJfGC7NenxZujQUiF9RNIeJL6uGu_bfksbxQKuJVOq22-an_pK5Ny-DHl3Csu-OXEVdaydu169xD90AHPigsorn-YTk6_e7mz2g71RhkE_zOh7T6dwc0jLlJSaCQuT2bEI5CyKV5YzrAzXZCT2QjYfg4BrhTabuQmNSXbIFl79D5WVtbrJ1ZAFtuLcUrvCFkNwI7QBmjvTaxwd3DtuCAp0tbOe8Ges5Iehimcjf9MPWdgvR-LpTmJYbs96RJLCisdKfJiB7bVKFZQuE9JY_qD5oXr2M6cIvLzRxOhcjeDUmPq1f1jb89iZ-ECB8_mpY4Vl1Tkkx7TFurEDkMpzWLYj7XQbsEbz2XvSBG28jaC1OoqVj8J4oo06SfRqblzMncuv8V7mNbGx00sVl04IBU04McGy0y1VlIu5FxQyrALdO5kzD3fGsirolnQgKSaVgYDKcijUd0qbcLC1Ix0mbhcj4tZHPv5rd64gZEupoIyo1N5P-mNu8uIo24SF60aUx17yxzinYCY3dt7x44ExiQLK_5Xg2MPuK2mkt022OmME7TyL8ShhMMBAsXJYC1wVq5sBzlg-Sr0JgyEkTActFtRgU6FQ2nYJYljzTVInvpdqKH36G-vwtm74R3nI78YLt6VHrJM5pdZtRM0dDJDlBiQJGXEFSdpYux9juVKkH6SLD7EsMOsJMmOXnEG0JEVXFPDtQr2Rg9dIaJFwG3OfsI_MBqP7CUKOiHfD2qM1ci5hPFjMA1-rxDiIevuBhYc7WJSUZvNvs1H4npHHPLkeK8VmGqUhBezQbAM6yfKYbKofrD8fFv6V8W82XgMIutc5Hbke88LF6U2wGApg0B9zClP7YyA=w1110-h666'
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FDSC_9527-2.jpg?alt=media&token=37e78ba1-e017-4593-90dc-e5f13030d744',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDBLcyCYM4kORGZK9FcfTJBa-UdtBN5WTaWBBAKTGK-Hxy8aep7JCPAdqZY0Eg4SlOHGJTZsEn5RDwdIec-pwqdY9454yvzrPezmca-D0s454mOKCsGIMHkegOfpVwg9X87ioM6bcoJe4qfFXu9D2-MP67Upd_vNYf-4b5PUWVH3qQsY3yA_q7RbzfPrdwx3e5TzXnI1k6FTmFYt9O8W2YWgExjF27o8ds821B4zDag94F9BHLys1h-p0unaa2HeV34mdHt7zimsZu93vRTGMGjZZlcZmuhuPDRB3vhG2yWIUBvTsqYkueYfoVqCxr3-Fz6I_YWfjH1etNJcPmQOTISBUVzVyZPfGFjO8f5E0SAP6pBkDLzshTggIY57ZQ-uSxIH48XITWdhW4sWSys2a_RVd89l1C73dp-6Q0ZH_gM7cwfKEH5Y6pJUFWPz1DENBKc43iSXaT-62oM7K8WyGifPbhNKEns-GWUpbQ1F6x-Ykik3g6rD8QHAIKNlRxaAABGXirMCiJJHA5uPiR02B72so20khg6_StCQydSnWYHVM7Xo5NcVfSwG-U2mSXAzR3ZECQHQT_u-JV_eL-wVEVOkO7XgPjWtXxQAV6pL20MrXtDHSe-j0TJSeqGV6XgQrJ6EWvSOdcm8umETzmmKWshlr8GMTEKal4CEerZflARTYOPwVGm5bv2RZRKf33i5YiKaSgHjiJgs7b6uKBMF-eIRgSrZQ__zaE048elUtxzrmecHNsffRXdpBjf01A5i1gX_mHiVIZ2R0iS3_LlS2GzIQdYuuURuqAYb1E0zEL_JThGg_Iov4812am3DJJ16nJj2i7X8SnEafZKzl0R0nNwA6DG_NZmfRuQwRYGD3phBN6OZK0TLoU7ceBHK-6CgLCWIj1ypcXDbJCfnC9rvMXMhcu670_UOE2i96Ines7C5GcpYuK7J7_H87_TzwclbbK2ZyMr7C-arW-7K1e6-CU7tUGrRUaVCvHzvzEyP7LAbCNRJT8C_hBgOLMJobGuoJN-YLTq9dWTCVrSmtN6Gab5t--ymSZ34eFidpYe6_0I8AjbhVq9kI_wNwesYuzIuXLctirRwvWK710RjKCEuDu6E6dGvJt-MomyxPyj9WVQ5OjmY75Scl95_9il-iGgf3aTUnkutiuWT60VzCsw5UlYpMVq6rKGA2tFp-aMSiRUTff4IRM5k5orEdvMRc8lIK7HBMxVbnvsE77FVAYZVK69L3hs7kQ6yd-vedQPnDhpu6EJUMW521zo-Fb8sFMj7_Xa_g2PkyNKRbTbUCSp7Ou3GGAr9acP8vxdKVdOMd-YcXu0eLVowMx7tHp-dW7RqmCMQ8ry7E7w2Vmfrrf8wcireNQCnUUFaESQbap0Qp4S6Rj9hLWJhSb2jHH6M_EDMpYftXr6z9uZyv0ofohAEVsZ6MlgDdw-TJ3EjJM_mIS5hkkMj3QjlIGarYGnwUXjpHNcdShFHH5zNa87Y_wOMg=w1110-h666'
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FJeremiah%20Portrait%20BTS.jpg?alt=media&token=6ab0c548-5749-41f2-970b-c7eb11d02a59',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypClxCT3nQVPovm2v9-gCLY2GLiaq52AZ-nqrwP7A_x1Voey8gNnsbYoul4GTElxl_fyeR9-BPLvpSiVLCO50cNLbSO8pPnX55g0khL286CpFQS_Rco4lIAzKktJqnaIQC8UpPnnuW-gxjfm4bix--_vgyVkOcSH2RJrDVpfQUIuoy0bEzrrPl-53Di1EOLzao9-5GwBmChiy6oSw-6-if4vELrjQUK3eS8crzzP_8tF6nRekKW8bsJr7A2beDmbbm7SZqKlmOhjl8h-dUhxH5dtx23kj1PL5iHqi_DWrgVT79agKeD41-s_PVnVWcMVm1D3BzFxpLEHLrSeAuUYNNVGEcaLt5u28-d8jTEKKEmz9U1qpEwya6v7s-DO6sb43p8Yj69tuMFhILtavkq0I_Vy7UMUkiMTjnWScwCxTO8a-7AqhS_NST2stRgDinet8loeohwapWxj6ObB4eq_22xoZDDdgCG1XVQA2WFuryT1GJuJMEbHHw8ocAYYhsDo4_GLTHgPLBxi33z_cMLoQb0pfqbmtMYzXxIvwkLyzbetT8jdlmDhIOkL5ftdOvE6HhNAl1Mj4u8s0ighI34XTygEQ6lJGBnJhPC75r8_-EmxH-o1Tj4YLsIt4T5k3r7XgKJ3oK1ZQmNbwe019OCgm13tEVZDU5FOLnULITnxpQ9Fh0qmsV2vCUhXzP_TiQk-uAHtMxFUNbnGvlfHE2sguDAZWsg3VKKa7f8KSybTnpQFpz9CT_R3QiCjPtyOZL4u7W32g1KTHW0VgSZVKtkiVOgOiN5yO2P5xzwdN9mZVedMw8Z7vJTAQ0F6C9yN7IDxDyq5D55cbTM89DF4-rRQsv18VGSuKLiERjkhCy4NwOTqtpuV_nggFx2yYR7loVsKXV-_lswWL4_FegcKN9EYx_Jqbf39ejvJicvwnXVM4TGe5LUWEMVmre4xKbr7lzWY5O97VO7w_9ObyGMRxr4q9Od-6RHRSnatl5EvXwcAkGGEkcLscBMnk1QfmLxo4Dy8iaSbj5GcaxoRl2R6BsZ1zlI6x3QbTie7S5RfT8XmcpfQ7eg6Agrbzq02lRNUirT_aRThVEYmiT-Gzh5ce0cquGUK5SrPkjyz3faxYYoRuj3Av_rSj1WMYnCvJaF7gWLNyA-s1kdHqZBuYz6IZfEDNZMdWLjikgGCqMEIycz9GVzFsi7Q4pxngWUcPXfrQEsoNuSp6idOq-6qprsK9VoyhP-o2AGZGA2SrGvaApgZ3mn5mzHO8FaPBlBVSKIAwjKrqSTnnJaqsiXr20Ddm3waCFjQZQad4r4_jlihuAT_tdNLwplldTV2YrzZ4eLpA4wCbW-GVlj-nub-2omspL33scFKnoCsRmnTv36C9m_nUhtTak31ODj-I0iqMvn2aqNYPWsPFfNTDnXbiHbWFih_W0vwsIgnE0RVSCkyiC3pW4925w6dFVaxjJy3zTtlXf5cmDI8b0Sv4cUwfLgqE1R_4Q=w1110-h666'
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FMc%20Beto2.jpg?alt=media&token=505beeca-d568-4592-9949-9788f29910a6',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAPK-HejRR71WH_56F7PXKSJ3OW6M--JPtVbez9h8RjHZb3fBmO9eOo0E-aq6Em25h1bZOUbMssN5UBLbO1S6Fr2Y-rwk-iyj9U_XV1cVP3I6LGe967ffSNijaotBn_ttQzXcPUpf0KsPAdrEO66pjtzrrO6RDs9YPu3f1LTgnnHWvlCtkYOkXN_7chTxBcMtYVTBk44FWyyoclA0f-qSMyShyBsHzbOKuWMJ4rjt0LtnOtgwbSXMhbu-xT5mGaPLU0bjdYVjTrP9wwU3lRq72r2dwkths9u0EICbW1Q4QtWaH_xDS9XNge5bQ37YJZTfLX6F9D3dsygWqe5yfvE7oTLmUFrBs6nccfMXnMqCSvjy6JrqRogzxq_tpio1uRkvrB58Q1OV2UmYX9LRXPK2FzgvPowj9Fud5nBhlEctC6g-xuo604ckvbA9L1Kc-v2zBNGzWWH1GJ11X8RNY8-sum2IPGTTz3vo0kXmMyBJpvioNeCmn-vnYdVlTBhVuU17afTbyg2bw6UjulqjO9I8mV2H1QBnuCtzspxyv-VMf9vtBCNpcJ9AKZVDnDbdZ_owSsdJ5-QoKkklDHlI7gDURGry5gC4tNJjgci0rmOPWjuhGqLpn-ZNdv0lUHAjnSfsxtt4CXOEQBhYfVrmyHOLmazvXBpqa3iKCP5fwsVdOmq0SX21JWaxq-TS9yJgPasZvnmzsz0JIURjYCUF7jMpk8LxCb6aLHLCKxxEL3UXpryqYTtcmHpMQZGD2AGI0bx84adHcGBe74YL0P-CbQzYiZvUk6-0qD4B8sdAdCtQU_dNjPuhereH5hDLTshRD_zn5R_GTsAxPNOPQJmhazjTkknpexTCpVvacxXQ8YylN3A_u0GR6sz-YZxySBNllbQ-hqhKsuL_D0MnrB6oNw3IO6BoE3RvWOidT83G9pFxgav-_otGazuxd7B4ynHluUuFtLmDm_3TzECxWfQ5thyfr3idHRKcOxCFASL9taDbrqbnhvPjY0ZMX7mLhlhv4T0PUvgRrHDBmfb5XygZSLSDqPV9UwVavk-YnMYqUNWqCMtPciUOdpj5keUwDHQxjg_uty9qY_HvxpeGZrENIWc92wMPS8iJgAeO5BpS3ue7UhsqwPYCh-852xPqM7CRU6BZZMWCFlWs1E8aGodXo--o5vkCeMMshiG-afJA50z1se_DlSSNz4guhJ1WaNEriJg5ic6zKY0wHS2Vp8lwrgCGnkBKni-YzXQTc7a1HT5jGu7adg5vdzyYmLTWzQSFCm5XjAP0EdQdXtdakyN1pP9uXBiR_9tkqpn4rOnw3CVGT_gJJ_QI0Upw8zWNoH00Rz1lqiYtgxRoTkSSIzpOWCykbHYN0jvq6vc_v6nnrY5Ysof0to75LRxVKl95ftsqXr3GOkF1AyejIp2VKQR0h-HnN3UZMPWzROXzTTHXxgFIm5aYQWvnZAiIv_TjL00NL1xigxCi4vJW7-jf0jthn7oQ=w1110-h666'
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FProf.%20Emmanuel.jpg?alt=media&token=d8ab2c23-ae01-4174-b4a6-ca7cb3b737f6',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAznAvagDrgNfE1OdYxt0A1vttUtKfltS-Hy3Ut56nDGaCw--nqRU1W8zQu7YQzjDABRC2SE-BQYEviWl3G8DdVwFp9lWK9lRVCgQJnoV7HhDkWFVqB9orx7DTZ-jrHot6xWzpsmcFzDRen2SQKoFD0i1vjA-Pc0-VmJIVLkXZKryCC8hi7t2hnHi6pTHLUIvZIvWZDOvXq-fd59qGSWSPahWDefy3JFDKWkv-QAk5JxFphTZ_ArsTJpVSN27aXniAA6jFnIP0ycOFAE1QOli4LAirnVgSBGt_4XHu9hq8GeYg7GCnhNv0QPB5iEfzSZcBA2i7mqp5dWwsJRlLFREpvT84es_VqF96wfG10l3eBsvwBNtG8oLu_QIoVd9NbJiUrEOW1Nry7vmMhzNCyKrBDR4PApqbIhQwK9CuKfLgJgM4xVaIdRtweR9cvTz04ipjS2OExSirGulLOV7W7SJ4A99XbGlhsposQkpA5dUb3JrgtNJzbT79oOauEYycnrYOYVrfEaOK8JdEz2RD2DfouX5aTMtqOT-hH4RmcFtfZeP5m5NYOdg7YSvQhoj3V1uEbq-aQ1JKPbWZf4bkk6AcSuw9J9Jynby0v1sc4Cal3WomFgeF1wc35IfjGlV37bbDswANIfceO6ax2IVE0O0vJcgInmA8cWkGCqKL7eATxdWh_Vc6IWe5g75gxxIIwHf6dFAgYAd3dcxZ6pALiT-01sBKzfkCXZrjsuU3ZimhammP6_ZXiQs5BuqvzTPULhx1lGGHUzS1TCLxclkJnFjb_MLOXqRG1HQE_StCVAJk5tT7JTzaUa2M9Zglv30mjBT918_53nvVgFg06iwpNIAFGo7tgfJK02sc7QTM0NK8JLAR6KSTNcWycijeAQCClb6gpO-nrYMzWaFZ2MktRSqgDi3SmhLZhAGliI5PjhDXDuAui8EGK_TqIfzwQq9uIfiHt8QmM2mrLeC6vE10lFwYUXT9Ei2ycNEwQ_KjphFRHVRaKIMSA-Chgd2JvPoheDSsvirjWtrEu-yvqVEBIZLnohnTwdwfaoGjrQwAyhHoaKQf2M9RVfRo5Dy7ejLqur4WWDwSe3L9L_7CYTdCut37H_CDVCAS3ox6TnVM3eaGGr2PXqTJn6LLp-ISxZ-dX4pt1bg_l7YfXvOj_KwQVWBKYn8kWruvhMBU9Es4JzbZpf_1L_NP6RCvQD2POnycDra4kOfZyhstABjvdd9qwvqcUkmAvSnrmRhUFTRpJ97FUduUVZWFd85W7cmNs69Mwx940TDtkG7a8hQBipVdQpum_TaUIn3cSTz9MrDN8ODT7pR2PTuEPFPq2qJR591qppDt5OPJvY8_IQetV-XPnr8gG_7XWUMQxk9ioh7a_gYPc6x1qK_wi7q6K2MZZPRLUTABxFX-hFHanHF2QtStheX2osbEv0l4aRSvudPtJbTyz1rhf5mEayaWBiTuMaSMSRgmObVhbxU_fsw-RqtES6w=w1110-h666'
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FCeee.jpg?alt=media&token=1d22ee0d-c3f9-4739-af09-625dbd91de9a',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAex_nHtBgfv1-fsvlUhGH1Y2Y73Txmhdy56fl-JHHJY4FmRiXbKKYe2goi_VY3_STF-vh0Opg9wlMi-T_dYOh-NVIfh-fWauN8cN7tTFkHAJahJ3LGznpigmpOi-cxtHgZdfrxqUUUWS-8KdDQFXCK5QzffYMg48mwMlgMGg-B3SyUDK0CY_63XlVAnKnq8_5MREDL2IXb4KvHtzzzzCsvGJRrKQhSxajcPzD_OUZDg5RGOhICy8sy__pkvvancYBiX0E-rMw4HNZLx4uCUlQ5WEusIIRH4ELW2JK-6J-xQwfBNt_L9hxno8Yxpp8PMj6PEsfZV3haYdWaddxawowK_ttJxGak8p3FC4IyRwv0DuzRlSqiK34V_EB1LuSh2RQoCoYwtzHftTZyYKjDalmr3GbW0dRn4Eq3wdafHSBZ3r2GdOK8e6JYKpplofaZ8RlsVo6s5D4a_bJ3aAnTgPgYUoOAoPK9ltf5itD_JU4_kfy9SOQMyBh2OrBSNQdIzAs6MrRyCdAtmNd8kNc_kzCdsPvUKvg1L_0zyFh1d7TdGANFZHfnIh32s9AUX8ZmFXXYdoNs9vzT3jo1i23WZOTQpfqx-QtL7KXDOHIgI1QVWHjj4-eEW8txubm-gQePkclpfrHTfbx7S61JVcEChcrLEZSB0cXtBt_XAexmujrDbBCHHeLis5q9BBi_ElCgYDGtEQsOb4I-3-rKStadI3mC-3BJS4eBMqgqpr8_sn1rapTkKEst5n79dZGUn4X5krE_2JnSwqSDA8bH1Pk3JE2a64l0uqKK7S5gEY_qFGyX59W0XoEAaMTpYwhWt-geJEWFn_4MwoxyX2t7FAUEacbd8EVFQUXa7DypEgV41wpaYetyr8VLSKPKr4H7-V9Ya1FLokPIyiAgE_-H-hZO1JKX-di8wJelfUwgr_GUEQG6987up-wxDCSd28Ab2KQcG69eoxOZ52T16IGdaajZD39EL6UwO_qGNhOJLO4cXDh0LOeB_gvUV_v-h7UPB0VhvhD6X2O3oP1AtaLE2i8DiPKT6up6N3gY311S4yGBpEG7FG12GnAF3Dk66-daGtF5P_qBBCbJvSdCe4qtMBSbZAuYkLuzgiFdvw9MdBHFV87H7xHKR6tPFnVACDAAaJjhdWJCPrJYf5IOEw1oZMfk6zkDIUbO8brVo1PbJGh_986HWZg9Uxjfs4jyZ20hGUlsUfAhFuXWhRnFY45IJ3pyMtzdokYHnLZL0rpH60o98sDdZ0HbdRbYKnEC8Oyta2WfP4tfBKrMm89hr4YikmAICvuhH0TIwxn6nPzZ_7-yf6hPVG9_OilGPo7rtqtQevkdpej0xZYK3VvNxmzZX8PmTrTi1Y80YsjElRxka7Ksdu8nodOA02kNtkTg4CGs-BjSJ4bq3eyAdmCopa4HFFhNA3-nX9XTSNpvKFq2-BOQhJtlzfGurNe-6stRuPNpnLsTfgbkZ2hcxXU0JwJHGCs39w=w1110-h666'
    },
  ];

  const weddingsImage = [
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F12.1.jpg?alt=media&token=c9f3a0ed-0789-4d3c-9f80-21bf1e136512',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypACekkgaAhnQM71Xf1LXh9FzP0Rl0ODKfxk0Nv2jbzMBTPOyONlRb7gMfpl7KOdX_aFoiBYlT-sj0kUKzNrV0ho2cH_xxv2EVKvZgPGV7OMllFvwy5zf2I2NR0Vp1xffSJoVSIGB8WO02K6wW6MJxh4Vd871L0omto5PATFhbtunJAnNOuUqhgzXOnTmfxDGH-PFU0tN38ZQk9aRrxYbIW4M6DZNLnGAHv27RZK-KFAddY7z37B6tQ3ITVvqo7kz1SOoA6__2pqdIJ3ot5-j-8xp64CZjYffLGaJKRJ4uvq43jbZKiXZHNboUlfeeeHBXB24-wa-0av-WKLwQajn650tLJHe5gh_jqCcR5BrUTvgNiZ107YCGTdU945yienniBPR1bMGiMT9UebYl__5pL_6Y6lUa7WrC4HLhyQLxyoGajzsEqhmBoOKU4PIeaFENAHxLM0V2_sCp5GBKEbY669KPsdAxn72UT6GTJZQOwBAHvo28v5pSHULRLQqR1XcRcbR0LyPcXdUOo2u71ukPvhglFQsKMsm9Tqf9a1JtCUsrgg62xQaCGKtoho15BdSbT_bzrYcCRdCQVLQJ1r0v0YeISaXbQ8fETrc92UFh86gSLvdIn_jYl0CLJO87W3xAW11l2e14e2jS8WvOkIyFux66P51qnJjenmQX_n47tPlkRcUaHczG2PN0j9WAIKEySfShBL7mQWCbTYFlbRt5ePIF5or4n868ptvEKeco-MgNKOT13Y8qycauurDF0ZY_0LCUJOs7X-yLknl944jW1rPjPMf78lmyDg_xmPT66j_K-lBmOiGd8duRkrK1jEnToNF-NBmW6RoVlwwy0BgDVhubfwkhISeYAT2Bg6oEuMEM-OLyRIioQZrwiaDqDL3BlGJ0KXU_DAJg1GQpLiNv4OiAskfLvHYGJLNXMQeUdsyci90Kz1k2MYRBfKDzPu6fp_5nHdYDVJj4QGVSGVPUziPr-d6L_R4-BkFwVwKKvXfNC34fxf1Z_ISV70398ejezXSIdxP-vVZB39pYJSC8xd2ERwaoAV_FHZKDT5KTaYx8219AIgCR2CAQl_ltvoTnXDTuJkIEWchZZbxeOXz8_7klEzMKVKg_OABdwRxCSKn1XyfFC18FYz2DpUWelLHcyRPzgj_rFHkZ81-WEcovgF4S9cnqS-_wYVYpZhDuUM3Ytl7e0jsgtuhXHUTQ-JQdUzQZsCIaEVWmzWk6akmLG2EhBJKQPqqqBhpKgxoMvc70CO_8FWbh9mwptvj6iGrZkeieTtrDuTyzOBYJuevTNaztFsuqzU2ow9SYCViCmstdFYI2il1yhyJ7avvoDRyAaUJtBHysX45V8yRZCZ0k5IyIsrPuBoaIdDYehmR4l4H3NClb0oiRqzzwaNiItU024NGeyVbqit67djfav0getH0mubMov-s8waumHmyEjLUMEYdZefIws99RXht0l_NkAaIhiW7Mg47Ler3oZtaQ=w1114-h654'

    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F13jpg.jpg?alt=media&token=e7f22ed0-8c2a-47e0-af6f-f15fd8aba108',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDANph3mdkgJjUoGR4Sh-QqoNPI5TbST1aTp00hpvV1UAFNsW1OSwM_WP1HGb3Km5_YAJwZGWraBznvpN2eyQfaVydHtnms1_WgLA1SRtXbGU_FN6vEjnyiQsYfsofd-HaMF-dveNhbQ_d59X3wWZlqReQhfz5LxR_az-65eI5t4pWAkDL4JnW0KXnCQF3KzW9cz3505DODyWCmoUMuYRRO7j_F6ZUIWaCRRy3dVYjsJuNCTfLUrHrE9Lcz1Dy1xsAeIuQpBHyTMqkNDq9cTKlGyHdB_pNjf1cHyqgPVXyFBjsQYtFAwP-IOLxmZv-Xn-eotDRAIjCfARJ40blev2wIW6vVnerxw29Wd4N0t8slHBkpI140gW95cGK8R7WcyHwSkaM6Xpdw7XK5FPguVrpS3qAmI6guOromY2h4onapH6GSuuHW8Vw6A1vO6hAxRaZGYP9hYDWErkJzWm4C8MbVcwQm9CBoec8D1vGMHC7VWvPG0e56fgJJt_Mp0IIz2e6NeJfkW5xfkPIqKhGJ8xL9vHwsum2OCyKiOY9J5kwB-oMced7PHw0yIKVSF3nsZHjXcpVwVN1xyFXb07jVE3acJ4qgFvhKBayuxXOv91G3MF2hLqQAt-nx60fExN3c1tGTzY8-yZb5eyQ9gCu_lVgRqVouWGvixnWH88CcIhViTQZSw4jD3ign8tCT_cIuIUTRiaYsolYTq50vFKel5nZ1fzuXXD4uhJjai1hp7La6-i9jdg6ykKglvykFBSzeF8W0Oae1wpjGZL01NLxbN1Too_ih4oJkmHpElXH93GR8jNMw9SL6EhwEJgYkbMhDyBT5a7-bbxnzsb7rEJz6M3KFnYw2B9EXmK8ccSwqSlctsbLUwLB_tHAbCcEtCGtuADvEr5diKd4yIIS1qTf8l0M8G0ue8jvewUm6NV90b7eYtXjTW00GaktuzS0Ni_5jfpVqj2_71YJUYhD3AtTV4PFriKTuTfVeiv7BYr5SJaCGNWAjDfcp7tWD52GT9vPvcZzBW2MnnfETXOFey64aATATOdECui6xKxY0G2c-HGU2lL1PhSD1MLiGLwTGVbXOqI1v12E3uOBR4RMRrAsWcQC5eVkhgDcDkSZPSepzNe2LWl5j3lR3_dM7tdo2QRLWBTMcm1toa2zfqfr8AewDhqLW5jjpHWqhy-Bk6AWrA4Pnxim0zt3JpTbSezenqhGbkYi0ZeJfDgG-kJjl2Qh4iwa6f-I2FS_K4xa2ac8i-VHP8gZyeZRVIqGeg-QdmYRVF9iqAk2SxM1t74xjWUpkRj94fZyCFMF6Uz9EY53BIGXgkQva-DCjir5YsnYQaqBs9tHmn8hi8Rmx5XF6jzdfJ8W0SvJBsG2n7-pGlb-xaBt10CjX1IVzgArOHa6Lrzlq_1IKm53kpQOwWpipEOrgRDBoj3nWZIIu_l1vkXQAK3FK5rZ1vD98XWYbS_bj2t-Q04g8pagc7GXXbm-vbmMNNQ=w1114-h654'
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F14.jpg?alt=media&token=2ad1c82c-f26d-4ecc-858a-54277310c22f',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAClEX8vZM7TOOSo_QLMNm2TGMDFgrTxDDCpuGn4oXYehYMZo9qs-8utBWp6_r5NevWZE6FEOlpq2X65OK7z4t_sR0ZiLo8nZLLrKVGNU2MTlzfl8um8Q-wNQVJlip0v34sE5bAcHIf7FoQSE71lSHmZa0w2WXB735K56aJxXdjAJDKPSqSF0ex4DaDCmAK5MwjDUdK8SYQS9pYaE4xT61Jjsjv760XYzzOxOElZBOTtqEhvOZlfzigqe30HP7ewT6amtR8t6iVC7JywTsM9OYgGdPkuZsjGRaGkJTUH47Y-HoKl328x0k5sB2xIfO_Oc2rfeOzORrmeRw7ONbar8-FzIlnVjmcUMxv8XPHQH4BNuFGgRXpFV6V6um8u8UCN8iavjeVVwg08OYPNeoHty1IsjLmTba-rmfK5vjzXFEZrypvWkSvHTYTP7IHx3VvidhNZqrDVdjrmPAmgZT-9u_TiXiDMjXBOk0IcjU3Bq_-gDXQWOvMeiINm0870aQOkTUZ2pBPVhDxidmkuT34Fl2dn4AE2WUHe1vOVEW2iXVmiOfQZ0Dmn-DkmlNjwqbYoAY4dVS9pgShbCjtO84vNJbGGHOqAPqKwMUoscfYmYfWFnCSnSFtErj3K792ER-8EgwWv18tBzq-jU5LG7cXivI-OtBrf6Oppk_7fFu5lCiy-hcST-2wdtZmOhAe63mO2f4f7eMCpnFr-Ei9g3OFjUyJlLLwjD-XZG3aim9s7tskMufNqz7_kIuB5cXZFP9zcCTGZmjFyetEy3vIrfwKbrQ7wpA7XNZeVD6sRjHKcgs6Yg1iWNgDecWvVnrp1bjBOEwQxfwMgtK_-QyJqxrUleJ5ZSJu8IUOP0iCuHJj9zubkPro_GIR3imQeWV9wnmz1opzFV_eVMuVirdAmMXd6QN0sKKESxYUf9X5kx4WqseneU9iKbwE4YVwbOZ0bQWikarurCgKC2NSmy4zlyr-VbEEemLT3-lXHRFaLR8qSluBmsGBkTKGnQKgp9f2fxqkVY95xmH8ucDeQeoQCKp0Mdr_5gEbCCPbxbiX_nV4Ce1_c1BDQHFrJIwD1aWFW2XKHrB1qQwRKOPgd1kXJ7TbgtXxwkhPOOW3JdZSUEnm8RMatyzCiRJCB2j4vbYjLmUJ6wpiDSZls2uJpDy7fsmcGbqUiN-CIkA63oTDTqAZb9T9MXDXXjES78kEjzZC92SObUGbYfd9JelEgvuvRxtMT_h_3Iulx8tyOPzc0GRsNqicL_PR44tL1Iocodi4YQZFPr6FySq_Hkijbdw8Ujmb73tA-921-fjMuXgTe_ckVHDTGlt9GN_OvBT-FDLzRoJ_jIdL7fnUEEufmMxS6sGUeuToFA43HKGVJnuViaVX95vgLbWaBvknQ1DYZnhz1zy_XPNtlFJGq6Lf5lOE2Qbkl9oPDmqg0FN8PmmTU5e4bQ50PAjdTDkDOv_YVVCJtlDFLQkdqloazaAFhH9zyDP58Q=w1114-h654',
    },
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F15.jpg?alt=media&token=1c1c49bf-ea2f-4bc3-9247-09222ddea292',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCbVomUdO6slqP8WvnljTM7jrd6ZMVZZGX4qAtYXDOn-9pqz2m9phRmohEIPOrSLNwXAJ0pkYBCBCBZr68onW3c1dU4D2p8pjoQtnsqCIQIZGHIDzd8v6LQ3tapR6KGuwfhTd0gvHhmciPTjEFw5wzIXELq_0o-GT9AwkPS65s__ZsgiQr3RcVr4ilqBQ6EcgxVHajBb68oeDy-YRBtBwFKcbPbB6bt31ar3JhWQWo47Af96pN7MnHSDkDbIFaXcrPKlyycIleWHZHZwt24gKyPELgaqu0Kx8JSDC7X2Fjv4KSpWxQcV4YJQv4zzBQgBeO4mYs743J8fzDQu84fsdQYS7xBnuSH1aSvpWxa3LpiUkYZAuNiMRrxYjUrKbsMNqrQVABw-iV0FVEnyQLCL5eCTmpRrUixpNfzxBYYMb7Xa2EpfSwacsgUilIl7zYPhv4GFmfMunbsgeFp68y68BxCHcqvjESOyHm9ojP5JtsLHrLIOyiRofa-ua_PJVV4E0HKi8rv23OGbhwB7yBFfRZ0Ygl4c3rE1-ntsqdpkj74Cxu7_LWfhLIPUmaAPOihXptV1Spo9zz0en2gM5YLStBYrieEuCEiTq79_Q5K3wq1GR6-lLI_u5EOXf9Cq2OeE_i2MckJAZNMTa2K5utSplAySKTpCCpH22IscPyrHgUjHqAgwzWqOqMGmNR0YFMLM8Az5giecWCQCrJnfjDPxFG2sbv-TXYMcC6P0mDVFyifD4CaXXiYgT_9h28kl3uc3wl7CNdVkQe3q47vouosXz926wrczxloMVE9XFc2cDPbFxCh1hedzNmwLBgjH1PokuRleWYC4LRgLBWtUTeTQ7I_mLT6TayvJqmskoZJwoR-oHFzSWHGRL0bo3PmkFRc18dnh0w4A2-5Bh4ECb5lI16YuPrbknCn5DEpdJ350ivjA63AuDWegy2fL7onHHF1M2BWInVyXsTZVGhwog2UwGbJBvgLHbtuwmHR_FyyGo-TxPLdinKkKhGOk1dZRSga_OyvfBi6HAQTZ9F6MS2LitS7PGw9wneIfule0VfQUAtxe-HiCfhtFzeMHgYWdQns8afjM6DHvTpmRE_gwGfR6vEuFTaOtGzIhSmktE1hzPAZfzUmGG7o2rbimD5GPLjCmtpLpgL2sz4hvNZ9W_JH_VEhrwQ57awuLJKkOZy8m19zvBxyjJjmbrouAYAzDMW7iPvRpDq72FCUMP8S69kp6hvj4TDk1wK5IwOGyjBig12HICVV5xmrqdGTY16Yc9YlPB4ZZfeSkOGjEl7UCF06FlJYHk24NyCkz8Vta7MJgtc8Q2Q9FUrAiV49mzPQvWdzrYg7meaMHKiwOLn10w-mVdMVOOW5a5C3pUoJG3LssU83Sa6r6cvtQh_LRkqF4DFG3x2ltExWAf6f-7hJ7gWkUi6_J80ZYNQ_YAeHZBMILPkS6L15lcuhwtcD7i1-oTp2PmPQ6oD7KT1bCMj2qCCO1Q=w1114-h654',
      delay: '0'
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F16.jpg?alt=media&token=0e53330a-5452-4d82-8deb-446501243c39',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypD9_GReceNrEaYCNMnGVWDAAKQkDCLakTaGCRNHndHssZDLjZISKfgGZe2xDN1k61rq4PJ36c7jd6eusbVZ4o2XIlkXFRcQglWNFkozCUpdMNtfaHEt_if3VkASEcHa5zCnpQpIofOFCGjq0DsqMgs0V97dNXlGB7gkPBRbxsqEaOEUbvUQHwSYwIG-jC0bCDMSU10wpXtJD_XxovSjm7woE__6WfpOj6FsoL1t2jpsn6qgMvPjIFMBOcx0Y1oc3LZValfwnky4ySANNNPPb2OxhtruM4h139AlacbYqk7AZY8mSZeSZdL98gjMCPHSS7Iljdq3UF1KpkvWMPqcn1VJ3o0vEbKjfsNofnOA9eDGrwweyp59SYhAvUHA25mERiFZIvWMPEHuv3tBFKkWCzr3bNdUBAV5cFN_FEG6fFKTLFApWEVf1cxPVPn6RxFcsVJ9b6GZQaaLPBlhojtX6ShoCHSMM8j9NDrSePhxttrogZysHSLkRkMdc78LSlwOq0VyOsdLKi5jRM46wOUx1jnBVGRbiZAcWe1nx7hd7z98EcKLsTgW5UyAl9rENZ5f5ITEuI1CgtsfhUrVn8kl1rwbWwIhY6vjxpXgbEpkSQ3qn-HDF2G9CmEj95qrV6eslxUm-mpvM8Vo5kgzlH_95nIh2NHy7dezV05foSlCOxGkXYZRPBRXsAuvn7ZLStAZ6JzCArNHz27N-M9lb4BCp762duG79oT-nWzL6bM9NfQvNzSbv2SnxPO1H7znBIVUzhc2KJ06wy4JCf83kLn27As-PzA-HTZwY__pyMSO7_PHqRIhPlcDUF-0c0EMqoDsViTV7lKnRPqbiPbngL8UEYgm5skFncBiCCrLvAykqF1mElSiYXpUlnDaigwtqmrtb0VtRI5U-xIHV5pThJ_MbLas14WCu1pt_anC2R4jw604PmArhKQiMr3y5K91nHlPtjswnDwpvoRBU7tSEdWeHtYlL1hbVaKiie5qGbq_l3wOSTdPYrQQHFmKWNnuskgguiemfAINojDDl6Flf-sMuFFs24n2emQ3nM_ZVs5tj1SzfXjee7XiyiDpKByNnX6nS7NX0-LBbitNS_njdUDp_oS8nCMMIzgc8gF3kxpRHs6PKfw5HS__bfvF-ch_pCD8uIyPk-Ki8LHxXdACQXAiYNVdihmBbMTBRWgiXkRBRyGR7B9GeCOUzSkPgNatrTwlnDoddZ_2Sgtv3YF_4WUhnzrdZtj0VDo3ga2e4-ypOb4z66cpcXuaf-YtkVAg2C4q8begm5JQQyEB6Mm2G1E-YG41976NwfEm-ahU5uvEVZTh2dcC0reCuSajm0YUvtXt6-8DyIvjNHDNam-ivb9lIAvyHgDKirMdJRSOwuO9wuvdjRToUa6TELopjnDMRGj1kXuhGqbnk6c7f3bs3RAk_uYkxsaAdQagGA7XPWBUl9JbYv1Bwy7MBDa3LtQMt-hJAO3ORQDAstvuwdKJYVuOrA=w1114-h654',
    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F20.jpg?alt=media&token=9fd20991-305d-4053-9c6d-03466da1bff0',
      img: "https://lh3.googleusercontent.com/fife/AAbDypANkcX8D0YCpot3E66Oh8nlxMF6UvvFbXm8QFQLBlzJ3aZ367zlADpQGvxfPFeQmYQXSqrVq-iMnDRmBCl_Gq9HAp1eHb-fQXyKfB9-nISF0U9n0D7N5JCUPMp3YGC3cUs8Xdc8xUvIU8X3UrynqeSehVRc6ZKvTcKOU66Bq43STYoXAX6U9ThcOeTtdeBgZaz-k8L46I6pGaif1jzMYgxABFOhMQ-BrPxpMGGI3hvWYQnA1QIbLp4s-2pe5V0AWxqTftQBsBiFO5ddcgwgzeqAfMqqlHtL1nHqtdLyCxEHg94SObOiRRuWP6RBzIYBLDDEMyAa_hnPUAuyOi6JHVXB9GprpdLl38nO2Bp5f1ToYn_N6ZSmSqVNMbG_QNvyAPC7MHnMCyt4wU7fqaGdVidbEQg_i5dc9l7rLXT07Ktt4MQr-czg7uxKPJx2c5ewxeO_DCe_HO1uWs9xOSZNOAphdOm8xA2rHkA776eZfE0wgWlkXhgc5YciylZODwlFOU_OUkmy92LjgPlimX_rBSV5kja0dQ8EGxg_rBhCRAb3-gJRiyIS9tCjoXJiLt2mbAWXYy7aePDJWwidQ0xxMkD43lH-JHlSTC2WeEATDcQfhDgeEGesWFbcNNR4VAAfMfFdQipcEnKqrhRvtmg_TB9CEdjJYqTMnHK44lG0ALKwTHEkG_yMVpTadFRRqE0ERtmk9R_heAxA8YReqr7pGEPwskWyGTFsaARx5_bJVOddJ2wm_Iql-p3lQKPy2nHu9bD4Puv3MVgJKsNASRikFl5vujwjWGH1zWPX09uLAHV0f0t4-SAbBw9F3pNyrUTeWOF2pA2cTbl5Ebtf3h9IAbSUep_TQuUi68TvMra5hzNILmM99inm1TiNqhgiKQk9Types1Gw72fE9Sm1uJwvXH8XUQdnOrFLr_fm46iGdaPY_bmD9XQsCmi0-ysaJ_wH-hU74YfkjD2reYrmFFF5bMe7kstDgbJVVp-0mvswJ4r5ONM8YxdzeAu7SJGFAVrw1wqZQf7yvir5iw-7W0YSm64QvW6LfqPthPa2ylYewJzKi4TSZcz4ULiggqit6z_Vwtc1-uUgwFEYofGUeS1-4MKLxOtBlHhNSKvJDUNw1ghaVkDyPQ-VNeK5uYxW5GBgFHw22rfb-9oYQM7-JYjLi9dgZsw9pY_bcJVshiu3L2kw4oyThCuEORz_HQeSY_b2civFwc5sskrPDRmxw48l1NcmN4tA1cH5Rtx8BlMqfTWf8wa6PTrXedd8RdhyRRdOlJloBIqR0nwdVCD2UdHtxgc8ib60mNFLRL9Ll-8Oyr-2ynBs1yNPvtlfrpiE4QbXM1DAxp07VfHnipiqulwvW3eEMB684QKANTn-MvBvf7x1gZY0PoU8oLt4jHfDspRZSg3IWxhqFjoevJ5zaCu4KmZoRghSPQQVZRVziQb6R_zlB7lG2ssKxXjmiuT03Ua8YIDu-PDqweHd7fPdgm1egw=w1114-h654"
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F25.jpg?alt=media&token=939804ca-061b-4ac0-8148-36cf7ccc5397',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDmr_unYDyfGxMfuf_RPHzgjFSv8KudeKDodQG8Ib1hJlF3PkhZ5iitjZ3a-KvXYuQck_4IOEAHYPZjty_4LpKASzuuzevezAp_scGbAi-US1ezax24bvc2v6oR7Pk8LCiTn4JwaiOFAb4cX3rc51maWOZWaGBlwsU90ZcVrLwTtmAyUuiIXwSuLjrH1mAhg-hx5dJMhK7rhzlxHwWD7-SYzZIvammumS2XrHpIBFdktou9TIO2cdWoaBa8lQTGG_FHUu-P0hO4l8bGb464wvpfJ4O2_y7N0i2bTF8u9fKTI2_4YmGqZFRfA360ADup9Ud7VsnOShpEe9ATHIVgP2wX9kovACj910qCSBJ8lKUc55gpquJ-_AL5AnUL0tYpNLBZs49goZ4LxjCZfs5YEb2Heypr-nsewml7SzwoWovjKbjVmlPfX6EQqM1WId2tXsFBNdVkvjRKnClh0RTOi4COZDeVN_gK8SRhxxFy0M-gk3Uy7Jrj89KIvwJIo9Hyv-HuL45iuWKt0FqHx20c1kGFnZkK4k4ulkHnMsQ_0aE58HOa7OlyjZSKCkSqROkR_mI2msfWozRINXOjZ2JX5-fA-FnyyGUwZud1fx17heL_XUREVIk0V_UePwqj25NlYnerv7ZlP3d_Un0ZSaa3uwhtv4VYhSdp_Ir1WAJhklt55w74YtUuxgrb8tdpxuIYsM-WElMPuvFHgA5v0M5g4U_sSikv2ILAgVf4SBNbGgMQCbHzjImqPS2oivoS5Om2R4IeSvvySArLKV6T5P6dieW7uzSPF9Kk7wk6fVKBvTRgUbA45MqOMHJqNmumsG_vA8J-KSHeHg5ptRmgqh-VZVaWuyd6D7oqC7jmUnq5HpNS2MD_07fbf4KFU4CgsEiepZJVwbve3-632-GR_BjJH18Xjafnxyai-W4ix3OBu3v9quAOe6w757iA_xkbXl4fhGkLlqE3-6a3rQxxatd2OBZTh9syOCo7MDZmhU8Kf86wNAqgoDtLFUK-aRB520JxApocdl7ZmcATHfWtGBL3jFDztO_S7jevPKPDYfWlIZp_TutwvHyZHoUWASNB4o2Ql00RAdOlXaO9G7UpL2I_0xhLi39iVbX9IyqDEQAi64xCUzdskhVRqrlvPGw3bPMiHuyUx2gMC4vysFvs4bZkJf3eLCaTITc8Vtw2WKx8v_RuouQwh5BPYUJUT_g08UOAfUTwUp31YPEVftuOW-V3Qo-FdPhnlDokB7jVP0W_JHGtmQr18Q5sG-Fc9dWdckLph1BIN6JCfoN8CxfAQX-ZHWdT5BV9goOaTBvIPXruRvrQu8VluGaHTzt_Ylos1Ru4NKXVGHDrIDxi-a0NlPbRV9xjuG1AhNYqf86pvctkjUV3tiosO5rs03rIbj81bFBth7SfSpvzsKHaadThxauQ9tW57TAsG5RU3T2xWniQkjm5z9tls4MpD9jeGDIsSKOp_PUaoUBgFlE_2ZCRVrWnoQ=w1114-h654'
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F27.jpg?alt=media&token=08b95b44-1054-4ac4-9b15-9abfa8304f03',
      img: "https://lh3.googleusercontent.com/fife/AAbDypCd6j4qxs15G1U-l-a3pH8MHxNyzellWr3q11bUdjELwIEY_zEwi7e0p6A-z4kZsJz_DSruZIZlEHhtRMw9pEuXrErL3iL_J8ExNnn-9eJESAiN7B9H1xbaytfAi9PdRbIzGEEiIYz8__Tfz-X0dcVQgqicOyVE1xQbsTgKbMDETI1yA-BXLOjJPjI5pAAWOLGoeVJUMt1gEVlAURb_PTUinUtxZUILP515Nr3Uiu2rLZ0nCGRD-2jmyCqpuLhleciNVQD5GsdnyGA71h6JWsiwvcZSvODziJh9e6SotA5t1U8LbsbhNv9DGpIOkx269FV7_dXppKgw2_s1UyJRgQkDkEnspM-abPwQx8cS4p-T9w00U-WZ3LbXBNVpJGA0C4ZGzAK-ygXmvUY6qxQ2kVIc_VFiuA2i6GhRH0HOo6AN814qYxsURJYWGjBzgf3LOqGoAXeEL8W6Vf4dePrgKj71VeHvsBGEVysHCT2tUQfbx9L_yR4DHHcv737TuAoZvBdAa4djkD0C9G9_PZHk-Za1uhwa-rqGzrL_iTpk-HMVbNuY_rlTogu_zDfocgPd3faSdP9dRAkDAn-P0PfRSF-_XXSL7nImA_7cutmONv4xc8muON6tnBxAYfxdI80KBg4iMOKuqijdLSCqa7qH3JQFgjEBY2bTwcHxh1DR5YRBoPwgzoVGEsrziRHPzC-RqXjMnGZ-ZWbhVQRZh2CVmXyDhyc3f7KkN5ywKj9eYIQUnddeh3h1rHKvINix2WamOAxr9WrOwEMGZwo5yA0FUwc19S3yRPcs4eVc6TkjDbisk9VxUKNHMQHJ4M0fBLXeOVwmvplyAvvoRdc1QOAPMgeM_lgLg1qzr5gKQPLGi7iX5kA8hxGVPE-BqF3MZDi5wRdg0tv9oeZ8NTzViqUGHGgRDfNn6TgYB7Ufl_r_bs188sK2lJbfvuEkHFfLTQL1aeAhm-7V1VEjz6vTT78gGi0EgA9YycUyASBsiej1TnbZpAkDiSSe03myuyQ_IirgLXmHXnB5XXiz39Yz32rOuKSjA13WhA72NcOJy-TBUh81s9GR1H-0AfAcVmlUHFmKosRfa-HEJph4kojFiv4HUL4oiM3sdj14l1jkuYQmo_5yXjejlXdtg73XTIXMYtiHvT2R5B9qkND17Tf2RMERR6x1agtI1Jd6ihRb0xMWdN0v03wdk4Jl7NB2W69PVpKo1774Z2BywJUOs8_zgSXBBFWbO-so5eobNU54D9vWDnMUbC_1QXZLjN46LmmNi32VDcZy5ZgpZ9AiCrTCiuCrucwZocg3RcIK63naCtDvK4P0lK-vEcP11X7kvJh7IEs7WwHee10ifyYhJjYCDojC4GR94msfZCDK6IG_7ovGGBPhind0rLYUbTHpcTcNVfWGTiQj7_YfB8Hfokbhd8Lkmw16xVubWvB3EC5ZeGCRSaMM6LGgKlLMXs9vJrsJ6RSheTRkKy-aHBhckkihQAflGQ=w1114-h654"
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F28.jpg?alt=media&token=94ed8963-28fe-4e9f-b05b-9a9e52f63383',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDsgj_ZFd7jTejP010ZWtpQYe-3xj3pO7yL58UpoLeV6bykaEr6JkAHN5NgsSe9Hi5fem_OBAD9xd9ByZ7-l5xU9uOwMfO4XR_cb6b6qkk-GnjILQuFXsTdFuGl123a0OlxHCV804BeSGvOVCEBhYziBSr6KrVqki0dmo8mYyVLVV8isD6V0-I0HIeo_koy9eOedx6jWC3oYaf1DSF2OaSbQkCty3Y4Z2RwcRiVbdSP769FfwLZUHVXeLIIYrkSIwWa3-5cuOVMOMlSJWwYY9oV_gFBXemc3fYPxvlrAGaqvjjKpuDFZomuXz_M4FYHLSo5YRRsUfI8gHGUX0tGvDenWz8dYoyvKwlxksSoaemVCd61wsh_03utXxfoXxn2tEN2ChkfzAwtFXIy0vaxrtuq1Y0qOCuY50oJhWTCdW6lccUXWvoV_xibUBC1laUIfujkH3wYnSBJveVtAJIq2zx6EuwsEwonV95oz_9ukGVlFo1kddNQ6CHFg7xMREEAzrS3y2LbOxqpYo8A27_0rKx3r9rAZZ3Vv1BY51zshTyfi-5GDkocci_vqKVivIv1LMyCZLqgCrsNIImDJj2GvturFhLfYoJ33x-EDf0nDQ40nJAmq3jAvxIALFXn9AwNqI8F6ootxAj7DAyGPF_-OM99039MtOyLZLW-TrcXCLg8OTjdYuo8EZ-Lq-LHVQLqoFqbMuDTWISpRDsrA1lM_xJbmeYpTzpmHallFbnzLk-C4Ed-vZTblZZJjGdZ0OBI2P9IEROVR5t3e5x_YqmS1nID40H1ghpSlb089iVAZVb2kQXH7ftPVWukPkIPNijFhI8HspMQ5Ar6DFktLlvigl6_ZgfQOYxc1ETZeVZgaYYhES2OUglDaAtVIKrN7m3cch0lwRR5DWKrPK5fVC6HgAIatGIZTSLYQzYd8_68lhSZMbNDPgm1IYurCTwo-rKy99zAjevbRo-lLZT-6l_Dm0G1hQ6SnCI-a2JPCFdJrbuuHU09wXY_9xpYpP2ctRXNScPMvT86VeD8iHmvzKEso2JagqpS4O-XWANCmwag5WEUgDQaACMvyTODcr41YfDON63S6LRZBKBT93mDqR5qqpT1IxTiYzJiLlNEKXUnp15A0PqtmVWktYY0FpnAiigHROhTo69PWDQITCV9wnLS_lnG2VgDtkPOK6PcLzWt2gQQeiQaOxcYgN1qpklbfxpvHg4yJL-EKIUet6uZNVVAkCCYPjnGzBb6ZUoXRzrisHvJwUOs3_CsEiWjhftAcWg_GwyI3q77YkoLvt0OGsUEtNxbeHUEn9XvuhPT4uWko7dMTiBr_e2obeh4_I_n2MRBOVF7gm0tVHnv55_JImCzwlMF1w6Mz5VfPibL8koqQpHd7M5tRlw2Q_KmfZ-NouNILY8-TkkJ3DI2NW8pqtY7QuY7FrgOOCPKh7baGQwhtVeceWInLWD87Y1KvxinvMbvtZU8slcGAOofEWgf5YXz9Q=w1114-h654'
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F32.jpg?alt=media&token=d719dc7d-27ce-4634-b820-1fe34e199f1a',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAzdLBhfj2bgNxNeVZyWzrESB26xBD3O38kajxwPYXOOqj3P6hwsQAOBo4y-BxXuLev0uAFCbxSIrexAFnocdvc0vfbb3BRC1zgI_hoW8Tzd9FpJtyNh2vB6Wg_RafSrPtrClnOTGn7b9WZjiiRo1OJpmsJatmCLXObDmyIWQTc5dc80W8dIcdJh-KY_frdHGghNXUib4GmY5zZhrgxAE36aW_wFV0I7HGUo5wpJP0PP_PlTiRrrjkcs_qH1CGAk3MzmpmR8J5CqT2oSSV_QPiKleQrLtuMjlRVe921qyf-_uCb-eDEw1UsNsDmKyaQrze14byhRoMAq39VpmJnYiGA-w6rxv2CXCV6qze-Tm9ErCQ08Fv2_y5XuKtsvF2-vpCwtf0NNmrQBVrdwuOam7jmFN1_yTMxz7aDi6LZpOYhH2aQEfd836PzAW1fe2taoM50_rBeSxqeTI0-d7Fo_xe0uW2O5WlIZjObLLAWVpIlqnBVpULoWBwo9IKVgd0R-roTSQo7LHwguWh1-6aEU81ZWBJrKTHR08f2g2U3j1m2wPqSgNqD9a5vJD95ImAwwboNZjOAC6CWPi6dpkHE_r8-EXpGgVnCuvV15ZFJR3-Ki3FZ_Hrhqha23VwPwxbxKA7EyTTpN_eBawKA3zdAEw_ladc1TJQO1sm9uHD_qjh1tYREOBXVLUjxzrRVkTFwFsovCj8qWu58xguYhwsO3gr79O2ufkwgJaqBI27ZlwKEvm9NLb1pK1OO9CfFY0J2elbGma9U7p1ooR70-86vC9YXS1pgWbPYAl7zyJHV34Km48ofGJU8psdQZj6-0-6xMHtTgI5TtXS7A7OdROLuMKFAyT1brsXvrjfIakhPyXsASZeeXurg_z9Nh8l2jHXCeK9q9TMt7Z3ZkZI2rmlG0pAnZqSX5dJSES22Qq-hlxUsRDGAN02DzBWNhv77l-WvERO0GkMddLtbIeSWl-S1lZlVTphj4VK4GMuST4nwJeC4JE__mq-2dAhUSPCEx0uSOZNqQYe_MNfZSdFdtoipudu2W9kWFfeivrYxYAFBNFaqGCKHIukU20QtRJIEuWb9FhGKGLamRMbhDgND1a_hW9EGTxIRqRnrgOxH1g57IB4pNOh_S1tpKSxo1s1n5ua3cX4yBtiAQyr3BJkjMaslwLqeqH9pTXBjoqUXj2G1JinD5qpjNMH-V_mWQ2joBBmE0-92Jp2O139GChJ2_SRLFaPyi_K12tdWC4s5Kh4SRaVLJXWSTETDluNSQGAt5BRPR8QdFozmolW8ic2DXMmF8xJQ6nGUQTZZOzWPpznoCJNGo7vhdxUxI7-6-J2HQqK24M5lqZmgNxkY6lLkgTAtVFoD78Nv-eKUtt3VLJ6jQVMWDtFCAlbuM0o8fl2LbWhq3cR4t7nTNlGcUHF5JzuLNosgiuu0m6RJK9pMl2B_CXw_GkKGntFIlJqD7-nOZSIuxFVDFZ4q3ngwK-wI5rgKCg=w1114-h654'
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2FFor%20whatsapp.jpg?alt=media&token=ad613edc-fb1c-4fe6-82dc-e980c7852fbe',
      img: "https://lh3.googleusercontent.com/fife/AAbDypCSL-LTe5d-AGTM_L0XGVmJPb_Dz2MQUwzx8-K9Dr3oilXYijJZ6OL01pKVR9OSKELqzpdBFVcPe2v93LyetvgLLafjltcmB9-0lGmgTEaLnGH7JpYhMDJTnQdrBz7ctmrXgC1GXBHJOZ9_zzsvrPpPFTHU5NYE_v4dBFmSSfQ4cNAKWUilZQCkX7_GDlHcxQjAPo2fjQjDzAnkLcVY8Phwv2n07V0yGDJsbemHJq5D5JUdRwazwbg8cb5APdBWaBHMqzg5cswfyZweIERKs4U29i0WJuM3rCb3rhFeBIXn05A0lOICUpfqzUKXTVtNrE0BvvgtBp8AHUM9prwNbEXWzZt7XHaTLCG-8moU_il9nV38uQ79vM5PmRNv_vrJ88vIEaTZp-Qn3GWSnct-lDnBaimDzs3o-q4qreufUWjXBUUVdpjXKZYGv574wHw06f-07Nl9mYqovA5F-R2xZ1Y3LBQPvA4thiP_4q0m8R_IJC-jyEssMkMF3T9a6wfjnarWy0SVsOp4D7wfiUsdYWZMq6y9NU5uRAmqylV4PO2Ra1RrWAggvIkWvldIIhCaGmkgr2MRTmd2Rx5Kyq1V6RMsL94UGxUrowO9SGaGWg2Jg21-9e-BhUAfvA1xfaZgp8uS0S_0hqu6pDzHswvRKYc0PYYA-UmGn_G_2cvVSoH52jrw9PK7M8JdQOSbTWcVJ_X6cL-jiIbav1pY6dUBKM-akDWSrd1JOKTS4raX-H4yhpZMUM-kEgV-afn25Kw9hN9TKE8uvB3Xrex_9ERyvndVR9MDsVadweyppMZGxMJSauI5NXncIqu-OEi1Tf5_QNwrckHPt1_R6ihwZoTPY8Q9zn7sj5kJTkc3cnmXvetGOCTcMN3fC19jEsrhKROH47sTv6b84RR1YJeVaVYkkc0ZiAqF9waiRLpipZj_j6RGyI2p685SNFWimOuBXqtDI7rvvi6iypQ_ec_oGV3DN2mXxepLkYHq1WfNSYgyuj97ctKP7no8soHMmxTkMZfDNLLr8BLGUXkvTMSZggctKz6AEHxKXCjwW6kgYQ3AcnB4lovQDbWVJuhAlPRJz6gJhNoHz9T1RbwDrYnvNw3u8qSe-rpoavfMp4lrJTN4yXEFjjyYhNSC7j75HtoJJAjtEXCl8d-BD4WnGfGrDSSXD0N_G44hDbLgqXaALGRDXxFemSgD7VGNM2p4xAcDxoQRA_YlbGOvwnykzXZ1nNsiStK5Dqz6zeqsdVWj79Nkc-GTWeYXmBsYq15FvRUIemnH6tAXO6iy608lxEFr7pbL0EtPXrWjYNfwtnKXNozva54sUYqpVdcvvbwIayFEpiAYWYXQvkmrCJFeDJKkIISZ3WGx4P5hPpZ72ks68nlVi8nvr5AcyEXRkDGs4Rxj-ngk3Py3rU5LQpDvnrIK-M64bWREsFBd-juRGdoWd4pI8NS63VGXudVGoHD0a-6fkPPCB9G_IzXj1oOMLkIWvYmRHg=w1114-h654"
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2FIMG_1851.jpg?alt=media&token=9de84ecc-c82e-4c0b-a292-94f5ce078c7b',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAHgc8nFtjzOqQOpwhYautbd1Oos5pCKCPQOPVyvzSn6bimxurwQqTYwg97kc0aNzb9ObjreHVXG983SKO-RDMj1OBiJ2gvGqZ06t6GKvL15Miagt92D-bxug_gnSkI3qAEhBsi6xvUZwPL7aD8rrcsb0SmcrAVXIBJbjnCDa3BC-CtE125FyWE0KqFC8bt4TE_gJhzLr57h4HRCZj9aHHNQS8YQIaQmxL1jZXNxcKtYdb5PTAVY_3aI0jMj6zZv5HkTJm9WoSg3J0puM-de5GLJu-_of7oz6TIKdUTQp5SXPc05pSaKpRkTZ2d0DVvGFwPt9WgAayJSgkfMRWAHZGTEOOAyYA3ZMd3IITWbmgcDgFCOEFD9d_q1QMlwsCYSe2BA3O65klwLB6WpAPSQb-312_Vz-U64x8SdDppY8JWd-scf-TomyAUsRDYCqoOxbut4fEIje7T5YXum46n49sOnNFKRp_ZJO0XLQ5xg9mBmhS6DpmkoT12phvqGGZS0ye-EQ767KTzM0MRH7uqfOg-NDRNGZFHv0_DDss0ltILKWOufG7FDGLXxHYdDS9P4SU6mQG0ZhqSKHbDGgg0Tpmxa8tnY2RYyADIS_eaSa9zECu9NVDbsuY8ejoIR79g9_kvcJYVDBNPmprdTpElSjbv6sF0SpJrm5m2cH1syWqryFdirm31RHR0xkcPceul_Gb26ghH6ekPZPwmUAC1BPY9KmEuIygt__CJb3JlhrEn9Pwdv6S5zlA_XyyxBzGQrE3X4mHhAXaqMjzmgiTB7TtyfQ8GIXYhuBiOONix1f98wGv2dq0KYCkXfW8zRF5t_5-nX9giAGsQxcNJv_4gZf7kL5j4Brx4MbsiIFNnbuzTsBdQIgM69eRvPG7WGJAIPRa--RjQWmZtMA8ByM_pW1e6JkeOXXmJXmbw-rRvVw-qvi9GYwYYCjad4KQK9wcRkajbO0wLKL8_wKGTn2bPkQOORCFj0pQqX_RRSlamkn2WsEb82y1-J65zW15SkRbQyfQsqJKQVtAptrge2Fgbwn3FG0AHNNn8DVhdi7CBYtVau-4X9toQi3I_xG5mFk-V_bt05hQY6c5xfugZC5Yt_KAbtat4MucvQ-MLowwpaB2TVpIEnGclY7LqP5LgWp7vaYfCrkzGIVaZ2KYc0z49V8X_3A4zWJce5Bz5tbSeSqGxA_-USqgYy5xrIYIocOoQvpgwJrm0amnmsSJ58yxcwfD8DD1x8LWwtHvzUtWLovOd-9xbPVkAd5DpmQX429MdTRSMxE7m5Jdu1yw-lcJ9S0OjstexVIl6Nd3rKdTXJOIv3p4YQVkw605sINCk-MGta63uDOVuinY5I6g5YnqyOwCs0iYcj0MALFU6k7oHLvnGtvk9DxD3sr906eKViej9OCFVHam7kpzQgIVsVLOnONeBPnQDSzWDgZKza0L6I-zsxKCcC7wmlWh2id59iRE0P5UOM2G4xXHP6wn4CXXn4g=w1114-h654'
    },
  ];

  const headerLinks = [
    {
      id: 1,
      text: 'Collectios',
      section: 'collection' 
    },
    {
      id: 2,
      text: 'Weddings',
      section: 'Weddings__section' 
    },
    {
      id: 3,
      text: 'More Pics',
      section: 'More__Pics' 
    },
    {
      id: 4,
      text: 'Pricing',
      section: 'price-section' 
    },
    {
      id: 5,
      text: 'Photographers',
      section: 'photographers' 
    },
    {
      id: 6,
      text: 'Graphics',
      section: 'blogs' 
    },
  ];

  return (
    <>
      <Header 
        to='/photography-page' 
        page='ph' 
        logo={Logo} 
        links={headerLinks} 
        booking={{text: 'Booking', endpoint: '/booking-photography'}}
        setCurrentSectionId={setCurrentSectionId}
      />
      <HeroSection data={data} page={'photography'} to='/booking-photography' />
      <div className="container" style={{overflow: 'hidden'}}>
        <VoicerSection data={aboutSection} page='photography' />
      </div>
      <MainPhotografySection
        id='services'
        title={section1.title} 
        subtitle={section1.subtitle} 
        text={section1.text} 
      />
      <MainPhotografySection
        id='pro-services' 
        title={section2.title} 
        subtitle={section2.subtitle} 
        text={section2.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={section3.title} 
        subtitle={section3.subtitle} 
        text={section3.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={productDesign.title} 
        subtitle={productDesign.subtitle} 
        text={productDesign.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={weddings.title} 
        subtitle={weddings.subtitle} 
        text={weddings.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={portraits.title} 
        subtitle={portraits.subtitle} 
        text={portraits.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={commercialShoots.title} 
        subtitle={commercialShoots.subtitle} 
        text={commercialShoots.text} 
      />
      <OurPhotographyWorks 
        id={1}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        title='Collections' 
        images={collections} 
        subtitle='collection'
      />
      <OurPhotographyWorks 
        id={2}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        title='Weddings' 
        images={weddingsImage} 
        subtitle='weddings' 
        ph='t is a know phenomenon that a wedding ceremony is usually done once and the memories are needed to linger forever. A life time event cannot be well detailed through mere pictures or low quality video. A low quality video makes the event boring and absolutely ruins the long lasing memory.
        SHUBZ Visuals creates high-end photography + cinematography for brides and grooms. We capture your WEDDING, also your social EVENTS and turn it into a forever event in form of cinematic pictures.' 
      />
      <OurPhotographyWorks 
        id={3}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        title='More Pics' 
        images={MorePics} 
        subtitle='more pics' 
      />
      <Pricing
        id={4}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}  
        prices={prices} 
        page='ph' 
        to='/booking-photography'
      />
      <PhotographyTeam         
        id={5}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}  
      />
      <PhotographyBlogs 
        id={6}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        data={graphics} 
        title='Graphics' 
      />
      <Footer type='Photography' links={headerLinks} />
    </>
  )
}

export default Photography