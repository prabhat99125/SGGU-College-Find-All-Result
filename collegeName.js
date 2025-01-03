const collegeName = (setNO) => {
    if (setNO >= 1972 && setNO <= 1995) {
        return "Adivasi Commerce College, Santrampur"
    }
    else if (setNO >= 2121 && setNO <= 2212) {
        return "Dr. Thakorbhai Patel Girls CommerceCollege, Akota"

    } else if (setNO >= 1344 && setNO <= 1455) {
        return "D.P. Pandya Commerce College,Lunawada"

    } else if (setNO >= 2229 && setNO <= 2248) {
        return "Eklavya Commerce College, Kalarani"

    } else if (setNO >= 1663 && setNO <= 1744) {
        return "Government Commerce College,Naswadi"

    } else if (setNO >= 812 && setNO <= 843) {
        return "K.S.S. Commerce College, DevgadhBaria"

    } else if (setNO >= 1 && setNO <= 100) {
        return "L.K.L. Doshi Commerce College,Balasinor"

    } else if (setNO >= 849 && setNO <= 1063) {
        return "M & V Commerce College, Halol"

    } else if (setNO >= 1163 && setNO <= 1336) {
        return "M.M. Gandhi Commerce College, Kalol"

    } else if (setNO >= 2257 && setNO <= 2436) {
        return "Navjivan Commerce College, Dahod"

    } else if (setNO >= 1121 && setNO <= 1160) {
        return "S.H. Gardi Commerce College,Kakanpur"

    }
    else if (setNO >= 113 && setNO <= 342) {
        return "Sheth T.C. Kapadia Commerce College,Bodeli"
    }
    else if (setNO >= 1099 && setNO <= 1117) {
        return "Shri K.R. Desai Commerce College,Jhalod"
    }
    else if (setNO >= 360 && setNO <= 461) {
        return "Shri S.G. Patel Commerce College,Chhotaudepur"

    } else if (setNO >= 1557 && setNO <= 1649) {
        return "Shri. M.C.Patel Commerce College,Muval"

    } else if (setNO >= 2469 && setNO <= 2635) {
        return "Shri. Sarvajanik Commerce College,Godhra"

    } else if (setNO >= 1466 && setNO <= 1555) {
        return "Smt. H.C.Patel (Kandari) CommerceCollege, Miyagam Karjan"

    } else if (setNO >= 2002 && setNO <= 2090) {
        return "Smt. L.M. Patel Commerce College,Savli"

    } else if (setNO >= 1754 && setNO <= 1849) {
        return "Smt. N.C. Zaveri Commerce College,Pipaliya"

    } else if (setNO >= 485 && setNO <= 794) {
        return "Smt. S.C.P.F. Commerce College,Dabhoi"

    } else if (setNO >= 1858 && setNO <= 1965) {
        return "The SNSB Commerce College,Sankheda"
 
    } else {
        return ""
    }
}
module.exports = collegeName;