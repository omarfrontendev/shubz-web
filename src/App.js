import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Audio from './pages/Audio' 
import Filming from './pages/Filming'
import Photography from './pages/Photography'
import ContactUsPage from './pages/ContactUsPage'
import ButtonScrollUp from './components/ButtonScrollUp'
import BookingAudio from './pages/BookingAudio'
import BookingPhotography from './pages/BookingPhotography'
import BookingFilming from './pages/BookingFilming'
import SingleNewsPage from './pages/SingleNewsPage'


const App = () => {

  const lastestNews = [
    {
      id: 1,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbasumoh%202.jpg?alt=media&token=3203acdf-8ba6-46cd-9942-c3e67fa77534',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypABvONG89HQVea4Q2oKvGviI1D9AqxB4Gdoe8LUmRuqt3Z_SH3KZ7Npy-4fk76FqwpORt4CWuS1G0Ah2eT3gp_FZwJ12FE2amXLZ-Y0Ha04jc0lmN5V7v77FYOGjB1FX5qFcXvzoBm4UK_qbUcm8dzGt_aBAyBkmmexmo73VBH1mHieInZLHYPLUQrgUjEoFkokFJaCosjBBF0HJ0Eyp4wd2kbO5fN7kxvVm8Sm06Rzd52u-Pl9KO5LstsEoEY6M5A7wjevYyJzGCup6O1O_ZiKLmshBLyaiTu6ycqcEPyC9aX_alUCMlFePkvyWVjL8auAJIv7uuwf4x27ejoYBtayX_cwtST3VXWmtQOhrxBN1GTEdd04BdNV3VbFL-X62pQcmKIZfJBEEi_z1qGmIfMCnfMp90ZYLe1hfvr9NjODwkLVqlgmxa0ZOCk-c8JHgycfDz2QDz30ttdsX2a1MJ_4X3g31I3Rb40MKkagF9_63qNEruPsJFMTDcj2XAaBug2gmflBarUvA44U7JK94BtmRyUpoC8V3_jYB-ta0aE5ID7RF2zkog5UTv25wiHcan6449i1O6ph_McFFXETkRk1OREPpEGWNz0HeMaSNQmX45OzoRBgER7bcF9QNI3Lfjm5plt9oWuHxF6o_Y-NthUK75dPsPSjybyQjoDb4hqBxnaI99l2PFXE39YV4Jlo4mRPDSGJWXj0mMYl_wLSkdLpVg84p1py75AZAQeKPpr-e_9HUVI6xngp1NffgSJQI7mN_0yWC1DG7I8SGm5A0CnXnTBwZzf618ChwZ-jtYL7ihcexPRTtuXyUrxt2P2iFo-U7rjnI-UEpw-nnPGYtsX5hHEyXkHIniAHBNgxsD8rm78rezyP0u4Aw9hsUq9DKFRrvEKwhpm2y6tzUjpMtxPhP8k-C_V47zoOWRxFUXGDmnoxOLlyXpZSRpESG5bFfVoA7pZy_cxuvZ4Gp_FlG90CitSOCjrZjkSTP_DW0cnrmFUhL645s89RObMQn_K6XRbsqOk2rL3oo4U3v4y4cqnv448RTght83y9bG-soRdYJpMVOXChTLXSt-A3wNZ3VJiZNbp6z5CncPrc2sUgqdW01E57COPZLtjCcugED3VM3ACLp9smqNOMuWT6b7vxE2anQSACGxlcfVlKZ-FW5caSlq5TXClIcaCFIJE1PoWV-LSU3eafmMwkP0wLmAJSjucX4BVKUr1u3Rwzy21Cy5O4X3E6zPNzy80W1VWltNCfoT45RVFGQCSe_ILsRfM7wAiCM7msa_FNVJp1wL52XXJxRXGOlqHtghwLGAcYQN0bBr7T0DUxSZTeVIVVcTRkV6qpMsnHD1mBJGhtJ6oSvo5VIe3lPIEKHjKeF2Sgo4JWLpGPXW5zinh0IIrIk98AlGrm-umO2OFBmgXWtEmqkYO3c_YYEzJEf39NLnr3ZIvMVTWCqXnOh1K_3i7Xbwd31cdYULIdZKLTTFM1Yslc7g=w1110-h666',
      title: 'basumoh',
      date: 'JUNE 6, 2016',
      desc: 'The final parts of Spitfire’s Studio Orchestra Library are released…',
      allDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita ducimus quos in, perferendis cupiditate. Nulla, dignissimos quibusdam cumque culpa voluptatem at sint sed, similique architecto doloribus magnam nisi mollitia!'
    }
    ,
    {
      id: 5,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Flatonnes%201.jpg?alt=media&token=1e14a660-b6d2-4852-a8bb-8bb9ea9eb626',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDG3ErXtwOhCo2iFgm0wbK4lVxmYIDmPPCb3Q6KkEua73kDjwp8cp1xef3QCJLaJl1i2zwKDAXoxhwevsuXkaHSfBCdY0KLMEhFTHvI9jLL0UqXj2dYGhlX_7yhOLaDT3MR5HajAqEnMElvuuAD5GKJIZasTUoUhxELxeNDyjzw2orZOhuAcInjT--SoVBx7BzZNR7Q6G3nLZ6_5tPohzBbErBkyLt1HQ3qO5zjzUdIaIts0HegAU8s56Cgav5xhC06X3ARy1hvUX15ld1ttj2CMO3_B24wl6W_9z-WxZurvO-nC8-NqV81foMDXb0OKkfFxjvtQr1k7y_rwWizMlQWjyTVygXZAnE-LAK9iQy6xnpMkBAGLEZ4_NrmDK3NAAX_FZA1smhDwLXI9t9184slnDlBHXZHLbIaNGTgK78A2_mtYqDk3MCNkFLAZzVA8xbjKcgrMwdkWR0Vs1gYF42Du9RqrXm9NEcf5oiXshX51Lovg3xXEYABsGkK-ENZDvqGDk077lnAh9vR34Mu4aQleHqxQ4gLkomfiqasZXZlNyS0m4locU4o63FO3axRB-_BzoMJQcF6mkcDF66jqlFcEYwTD2mJRSStDKn0FbVNlxE86TDhyZUnyp8mvejkOXeiX3QQZXy8DV6LT3S6s6yNI2CGM8KX6ssLmmMr6KnCARfKlXbFsk6tA9h1K7TSLvvRZtTtgKpjdfhXCipDrYyJJmtQEzbpWXG7Dct-dhj7TGWhgQbgaxDTF6n6Sh9_RkT4t3bL8IVqv2aq_-KHywv28Qh5jFdezW5fGpq8b5Uxe1bfRYqbOUmt_qda7osMeiCzTWF_LOx3oQj5-T17NORE6jnY8bi3GxEoibjDSiVqWlAV4I6VwrYnK45zP-AoTqjrj1PbWPYSHh6AXcbeed91X-vqTNKA-DkJO9i8xL5s-pBP-DZetgbkyjRjxm7faumoQpFD6TUVAfXDHorQBeVguy7Tmx-pWRiIuPhnuGvNLctTqh7t2cjwh5DmonYsxSg-PMBXqHeO9xneIXA_rUN2WN-gqVD12ObykDWxT8sZ9_BXJxlzSM_w1Ffd-cOzuf1v5Q6YkzI7SDfafiIBZ1pi5e4abX3YkwovGZLD5XfwAclxFrb7m05wHzBbe0__8G7hn2x1V6UJMlR7Y0eKyzJvBfPwu7QkstWEnX5NJiGMIu0RMu4yywZgtAe_FU4aE5FKmdJfi1z4MuUmi3_2ToKXsab4BpXOUu0z_XA0Y9ohWEvzsD_sB8SyBAlDePG_jtM4aw6W9rnYD9tdZqS3I-icPLwkUvdgduWvil0SrvUBjA98nz8yXg0YoEAQxRfYAAGdmzkNjkU72S8CQOC5q250uQosJo8oDvWtk6BFDH6kDsq1cVxb4uEcCJv5ldir27Zy0CSCi9WcGSvI5ykl8G5ZsnzDeIGzk-Zwsmz5zwyD2YQ1jBsYq2h4hdco1kCHu-C5KUHb5v-p8ltfMtkFbA=w1110-h666',
      title: 'latonnes',
      date: 'JUNE 6, 2016',
      desc: 'The final parts of Spitfire’s Studio Orchestra Library are released…',
      allDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita ducimus quos in, perferendis cupiditate. Nulla, dignissimos quibusdam cumque culpa voluptatem at sint sed, similique architecto doloribus magnam nisi mollitia!'
    },
    {
      id: 6,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fnetima1.jpg?alt=media&token=3dfd814b-f8b7-4d42-8321-2f60404d3352',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDvKgZzlso95YtqngOaoBeTUI88QhH3iDX-cnLB39OSHjbOw0Ml5-UcxQMMq7_v4dnOAWiKaSqowYn-EajlHjqIaMFKZbtTEYDVBGkCNLbZr4fFQHWNy2QE86165yD5xvpJdRRyL6A7XSLeIR0m7x-fYgsqatOKjbCMf_fFITaET6jPAnf3UQzK2xQEfl6w58L_1428e002srlXJVg14LKqUqlf1rqEtzuLIfAx2PZ40OB6tz9sQFiP8W6qQSIz_vyOXPYFqOcsKV-OntinzafrmdDhsXSQ1gRYmfmmvTe36PoTc9nlkHerEOWXQuEZOvLM3Wkib6Q-ZyfHaCcs92fayArrXZCsoNAwJw3qvfHjGEdWtWJhEhQJKeBlDIdaeFsPiNxbii8el-o1U_IyM8MFevni0dVh4rBJ8wZNj3BlNhS_83vZZzJdFwAqyOAqKe5GINS1KB45f7K7RptspIIpvnjxsfM0uShWOvV6CWrLvXWRi338nnz79Vk4jJVSvfrkH741yY4-H3z0hTLFKSLFi17sH0jNRvD3Ys_7tDEKhyBfg8K4DfraQgBDk-S2q_xzmj_T8RoyI572mgylLOyKSME1kWBIL5z6cxdjXGYpnekugYPqZwsWnRs0Unvs_8XltVeaRmN5_C-Rv0u2qegKfx1ot2bTlhhWep2AzSuxqJl9Okwwsg6z4ZPRA9CrsDKZQEb4-oPTiNzP2dvA5QRy_6xkERMWDMyJRwIArUMM-V2XigYDPJXF-PC-31l9GZzXQnWtObhOdloFHOjdn3Rk4pOqsGj4TMfkBOpyrT-OIHFNXks61Dt98lUbwasHInrD5WX3oQlFxg8rowTW9flK48CIKsW37x-699naWwCX-QeYp7kNSQXpK9O7AA72KzYRbFrrr5Gzt_4BrXRtflPN1yWEkNhkQwpMC4CVFkfP5lR_50HIxlqRgxmdB3t1tZyPg1RLMBKKEC_8I4mahoF3nswr6Rxdct7CHkFrDvHn4i_luBCOWTwQ6RANFC9YcbUtHoiJd5qw0T2ipV1vUN1oeNWWNQeB7XNRoeO_w_YPnXKYY44eAWX6-2tAdZ8d-iNw-7iKK2IbJ6iW8M0ZMmccVej_R7kzazzkwB72XvuaSUZY1xI2S928fMJ6bw-fqHFLDaMcBu7rqm_TAuAHIiI8NotsL98uMTbfThfnM03HDkjP46jusM4HtlNF-v5zuflbcn5-M2kX4ImOm45pJT8jWX4CBb9B5g4TGKwuuiBXCh_fHaMgQV7FVnusoaLWDsOHN2DE-nfCSGFgkW2-sCbEjtinIgEjrQumXa4t29AmEbX4uT383evAoWvOWA4gQOBwTGHHhgQWcn-CyBNnxhbAWuvwCME_GJsgUt-CqSlrirLp9CiK6pYjj9nyquuTB98U3iGUGdBHgY_KZ9Hgk2TfYScXlGQJIFig7ZVnz656_ZJv2HO4kN24yqE_K_C3pfDqnzugYK9XyxVJyWvGKA=w1110-h666',
      title: 'netima',
      date: 'JUNE 6, 2016',
      desc: 'The final parts of Spitfire’s Studio Orchestra Library are released…',
      allDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita ducimus quos in, perferendis cupiditate. Nulla, dignissimos quibusdam cumque culpa voluptatem at sint sed, similique architecto doloribus magnam nisi mollitia!'
    },
    {
      id: 7,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbridal%20huz.jpg?alt=media&token=b2488214-85ac-4a09-b9f6-e3d11c1579e4',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAK3NpIsYdGrtEG8tzQmsdUC_SmYjmki7sOKTJakB7G-Lu_f4iLAqtzSDCFpqDG3KPvhGXS96rLZw2J_RR_aCxBuBULZ0tim5QBmeD37hQRjB7-MSo3RCS4XfUEzw1auoW2BiXUTjc9sy9aKni363PutatUJW2zjmiBdR5ZpYxlXe3uluIKfOf4qSxSb9rtt95SPv5rosNjKhQ13Q5TGy1KguZldulFLHjHsupmqFox3_NYByzfiAv5ontV_3W6xt6lMZnC1BF2AZqzNS9Hbw1dzyZNlIv6yHO0slGMwV5CbG9qyRtXEFc058u_EVIh5cxqKhEMd3vaFvHi5OX3e6WiYRJHwP2UikA0-wyXXNqzpPExoifjV4WYuEGpt4rzUpAigyegHekil6nS5DdA2IFOW9DJG4VUwbQNP1ATB7yQpBSUXrWLQQoWkgSlFItDEXbnKYeC8gHpG22FAR9kvqMldtujd_w3Ea-xPrYqR_gbiKowkhT7HEjIsDW-n3K98CS_U2WX7d-4FYFdCnn47MqOb0sTGqD0Td7pjcttMpVeAt-M0nw6KITqMZQRe2vDc3YJq53i7XeK9kLQdxIxQjlb93O6TBVcJW1gtwwuv16fI956yGsjvRyZI9NW1A_YzI3n74hYWKzN9b4anFGmcVmf9555G8vqqhRZgUFQSiK6aDLUMzVobLTMSd7oFyahZX8PtnJAyIobYMBh6B_ZBBMtQbQRvVf5YLwvStt_l8KslHcQgMA_oxNs3mTT2dtBVb9i2918CIC3M5VwyfOWEws1UpJqca6nm14pLgEYsLanxD0tUwjgcJtcS4YJv-OLs6hd-VWViio_e1F5ijZt6jOG4UiY1oMUC51JzSZstyAucaCYWNGIHCNObDryOdd5j98YEB4ULCPlz8im5shxetidtXeeEuDGl-syaXpm52IQBnk2Do9bg0GvMkXH8ocmh79pnVgTadvV9NorsODY-zmTrqr80BpJvhiQ7zwvl36x0uuK2IJ4GqKvoPEdD22vg86cbvixFxws351IRh_AREjiiMSIXqNHutR0KI1JFU_mWVUSCQyZYJIMNmiS-pCPSw0P9rNnXXPKhWrD0Rej3Vc2UwLFBz2CQBFzHMP5BFtZsH5DeC6d4wS2VQwsvHjJGpeZWLV2YysjHGS6qsH2Q_VVl9ZO4bDF0RD_n0fvoZGRZc3sGCB2ph6sUJuqIegCNyx9ebLawCXjnWiL06MpMaVt-QSTUhPX7lsNmtjXaI-8s-Rj0vebPYkpwazOf2_zIlCVZWCHSq5lUpIOiMzTppm-wBRJrvdPr3HxXe1nccAkSWZR1wzd4va8rqNHg6KKcoSb6xaBoRzUgZFTo5ms3hWS7SrNz8DrVkUhm-ahMqN0YbSPSXZVpoADCGgUNFzxwAP8P0wQ-5gKL5Yv_nuRCqErP9uuZnpSF0-juYdUv-Orbg_mdI89HguGd-LJScpsOTouUI3nCqok9x_KpLaqOA=w1110-h666',
      title: 'sweet bride',
      date: 'JUNE 6, 2016',
      desc: 'The final parts of Spitfire’s Studio Orchestra Library are released…',
      allDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita ducimus quos in, perferendis cupiditate. Nulla, dignissimos quibusdam cumque culpa voluptatem at sint sed, similique architecto doloribus magnam nisi mollitia!'
    },
    {
      id: 8,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Ftinaries.jpg?alt=media&token=96f1327f-86c6-4484-bb5d-3f45c08dd12d',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCruhQiLta8ktFzB0iIZIBQVCHiuZ1Y5PhNtvOpdn8CuQgw6HuN88_AEcesxsLzw_2bAt6jZTZvYHMgmoJw_GOcdzyXhvAmcEHaOP-sH9K4zaeF-O7Rn0uCPVPXGGDTeUw-MHqCd8cf_pNWQqaVsqF2aTrsde0UXZ4L-gyLqx18TOqnTnG-ihikM_QlTKzOAMcfx4o0wZOZ8v4KL7TEpbbCzYAa9DbPUjNK_XBVNd-qfBbo9PCpQ6N1knHBSRkBf9_mzy2yZbM4ScYQALIYXMO2MkKgHzaLXYBibVSUUn2_4o-nRpseuxDxmk3zrWNkGOky9GUKZVMvfsNiNJfWM4J6aKfLhmYHFG5-__sQAmDiBeqJs2jhvueT9yUqRBVu1bAeof6ywJXvAehvRnmEEXjx_aVbRLLyfAXqd5utzRDN9CcJoWMNtDM-pyMehvYk475jUMlJjgNMXPfPwO8xK92MirtbKjXF4IwUGuse49nQEaIZ1vNi-QRt3k21x2Er0igDxpM0n_xPb1jGvI7Hh1HJb1r98DHMEbT-vC6pIw5SgcRUicgek7nNKCl5CDXaA1bV-PZ2CsuGs66QbxUGmpw_2lItrA8zf4c6t3XGU1hqDF-lGFF29lEBTUOORMdXco2M_CT_L_YhnyON-10sXEhytT2ueJkIUq_bZic-pw7bgr3QXJfyuFCIG49VK2A-_A3QOzHPQ2ApEP_0cmq-g1OCjS38S6FLpaYp3_A2hcopLJGDPLKhJCj8Ot63m80ETS9NrIqz4H4XzreupYxDiZEa2A5fGXfG6JqfnXa-N2OOy_3h6lwyv2UW_ECu6R-0etVUhIY3ao4nHlJdlgT0rUCMBPj8pqB8UbFpN2ZxY6Vhx4tAgSL4qA5KqQKnTHxLPuIWs0yx2MiLPLaI7uTdXKatQHHLGtcMHK-23yXXlTzAxP9rO9NlXRsSa6d1ehZm7xCe_SyrlnbD8vYuFmfSihDgixbOyaXa8cNdRTTJUpJIRYdnJDAbMy5IKb2g4MG1bW3pdhwR3twZKi3KW_NYKX7LByRtzCU8eAwX58FSUFRcnQMlx3GP2-SNvYezO4tnaRyof0C_NUguM3DGwnGAbVs2ED60kvTyNdpjALIQW1brWp70BQrSqvB-vS2kmyRshOXhqlvJOY5ymJj1TngjBuHFxilF1QwzE8cDHlpxucXmMdxLujj3dLkhMd9JvietD26O4rmU-p3ma-CLHJuKWIOx5ctm7Tc_q0BWDIHjZtwWWeZ2lSUzFlQbAursG5JHzM_acFiS-EWUca0xsAtRB6FyaH9Z2cpCFu2-CgeERe25VOT74DTPAeOKyAp90n9BdD39mpQEKNcu6oznXUXF8u_xlb025aJMZGetY0vPylbluMTYsq1D-kIJuNfUKXFRpFzK1_E6sG9pP0CP22D7FQSL8KCy6zIDI008iorrNL3Xnddq8p3g3jokleqxZMPOmgPeP8qaULQ3OHoPBYPddA=w1110-h666',
      title: 'tinaries',
      date: 'JUNE 6, 2016',
      desc: 'The final parts of Spitfire’s Studio Orchestra Library are released…',
      allDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita ducimus quos in, perferendis cupiditate. Nulla, dignissimos quibusdam cumque culpa voluptatem at sint sed, similique architecto doloribus magnam nisi mollitia!'
    },
    {
      id: 9,
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fwestgate.jpg?alt=media&token=71fe1db8-549c-4540-971d-d12ac2015467',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCfnTcQINu2PoPBJp1bwkHv33ABQE_vx4mpmkA_WWyJURwdp8J_6_6l9FoSg9EHgLT5X5ErdiwtKWno5MV8jyZUFmrjbgNyaI2jZ9RAyfYwrqxNWO8Rj4BKGsbdqpVbO3EETJntmoD30dLNKxIa-72Oqe-XQi-m-7_akfEXUSrqC1ESCFHveV0-JF0WYAFI0HiqO2d60heuHGnkc1lXv7mnqz05l_KFW_0AMxBRh1rKDO3zHwd2Ej4Ezda9p7UeGmuFNIIWGtXtJFHC4bZE5hvut-7t38v07hbdDcecDiwT_cTHqYXZt7jga_umU67YDTjvIfktNpWg8yTkPj3O8cTPmETR5fBNRZjWpM9Zm9KvWCnwIYn_d35gvwNEgL03fJLyY3vnmDgl-DPT0AI2vGynEwgDjChA4qcfamjS2_DbIlaC4tcQaXK1hXnS2-u5XucP2O7e79iD-oIvHjLagu5bdILpsbzA-Rg9WhzzS0CN3IVka-RYzWs1agkqqaODvEOorfx8INq-tgRQQVYAJgCEtEpmcknOFSB91E6xPZcCBIuM13bk9S7sLcR9wRx-aHvSFrEeFkQTrzdT89SGPXRZt9DFbop3m0Pqc3ljM7Qwxb2M49DDgQ8PfqnTR1fvTmEtAUWEdYMlhd-zFxMVF2i4AyqvkG_MkO4cZLGw71yvmXs0KZ7OS9U61Xh7ZYM5lZslyqiSHk8snYVjlRro4u7KDP-OdiBQ8M3Ok8LS-2gTnaHXASzR-pPA7JCj7awbqLgf3aPSxRykaUI51jkZFs1dGEOWDNc7DWhYtxHhTWrmH2n2fI8Ma_2-TIb4tog5W_l2knDCkjih0-ziSw6rNaLsa4KNO8YmXbpwdAD8IHqCDDiHCpv926iU_KsUlTZ3x89Lq0PNtv7BnUxIBlMG1Txkdf7G8UwU-mu-ckKR1s7eSFIb6w1HsVeaZCZ3tXKodaO-1Wk2IyaQ_pzlW_36l9KaEFKTzB1pb5TLipxFkgiTzHiCAeP3JAXwTVoKO_wQghXTm_YYB9MOkIBFsTW_ddF-pvs11k92huDcYq2sa0uSUj89qWR-hLQGp4EyEg2hyenW6QqKTXZTSOI-xQqD2au_-F9tUGA1n3EUtfh_1_7g-s_Fiiu9ebuqqUlrsywNL7teC502nlYzAv1aSuubJDK1AOYX-h00EsoBawM_h6IEuue9qpjZuv_V140JCG13BWFQPpn6zHAlJoviZ1He_eeBCHrzGTiaUHaS8R-bA2OVJZmH2KcZqXsVQiO9Jkc_qS4DC-I8NYi7rXJReyMde-SDpd8wHHqIBnByLPBQrsYWWIx1g2EArs_qh8HeECMiGVofifYsdWqWKoFvPpcPaCWq51zfwSLfzxzD0R69L9C7PHKow5wQBtcDpMTtW60sbkT0pL9VWsqXIH-2rNszyarSabX6OtEWciNN4LI2EiYDaBGHn8BMqxWwudOLNO5G6VTw89PbsGkdUHocH6ifWw=w1110-h666',
      title: 'westgate',
      date: 'JUNE 6, 2016',
      desc: 'The final parts of Spitfire’s Studio Orchestra Library are released…',
      allDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita ducimus quos in, perferendis cupiditate. Nulla, dignissimos quibusdam cumque culpa voluptatem at sint sed, similique architecto doloribus magnam nisi mollitia!'
    },
  ];
  
  return (
    <>
      <Routes>
        <Route path='/' news={lastestNews} element={<Home news={lastestNews} />} />
        <Route path='/shubz' element={<Home news={lastestNews} />} />
        <Route path='/audio-page' element={<Audio />} />
        <Route path='/photography-page' element={<Photography />} />
        <Route path='/filming' element={<Filming />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/booking-audio' element={<BookingAudio />} />
        <Route path='/booking-photography' element={<BookingPhotography />} />
        <Route path='/booking-filming' element={<BookingFilming />} />
        <Route path='/news/:NewsID' element={<SingleNewsPage news={lastestNews} />} />
        <Route path='/*' element={<h1>Error Page</h1>} />
      </Routes>
      <ButtonScrollUp />
    </>
  )
}

export default App
