import check from "../assets/check.png";
import car from "../assets/image 24.png";
import cat from "../assets/image 19.png";
import carr from "../assets/image 22.png";
import chart from "../assets/chart.png";
import control from "../assets/control.png";
import deposite from "../assets/deposit.png";
import mobile from "../assets/mobile.png";

export const links = [
    {
        id:"Prices",
        title: "Prices"
    },
    {
        id:"Wallet",
        title: "Wallet"
    },
    {
        id:"Memes",
        title: "Memes"
    }
]

export const feature = [
    {
        icon: check,
        text: "Zero-fee via Apple Pay, Credit & Debit Card"
    },
    {
        icon: check,
        text: "CFTC-regulated options"
    },
    {
        icon: check,
        text: "Trusted by over 20 Million Users"
    }
]

export const trading = [
    {
        icon: car,
        name: "Popcat",
        subname: "POPCAT/USDT",
        price: "Price :$0.927 ",
        market: "Market cap : $928M",
        image: chart
    },
    {
        icon: cat,
        name: "Bome",
        subname: "BOME/USDT",
        price: "Price :$0.00898  ",
        market: "Market cap : $619M",
        image: chart
    },
    {
        icon: carr,
        name: "Bonk",
        subname: "BONK/USDT",
        price: "Price :$0.00003  ",
        market: "Market cap : $2.9B",
        image: chart
    },
]

export const stat = [
    {
        icon: control,
        title: "Stay in control",
        text: "Own your funds. Moonshot is a self-custodial wallet that only you have control over. We can never access or freeze your funds."
    },
    {
        icon: deposite,
        title: "Easy deposit & withdrawal",
        text: "Make cash deposits with apple pay, credit & debit cards, and bank transfers in a few minute."
    },
    {
        icon: mobile,
        title: "Mobile apps",
        text: "See trending memes that people are buying most. Get live updates about hot moonshots and track your holdings."
    },
]