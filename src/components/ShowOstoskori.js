import React, { useEffect, useState } from 'react';
import items from './items.json';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Tilaus from './Tilaus';


function ShowShoppingList({ ostoskori, JatkaOstoksia, TyhjennaKori }) {

    const [summa, lisaaSumma] = useState(0);
    const [virheetonSumma, setVirheetonSumma] = useState(0)


    useEffect(() => {

        LaskeSumma();
    }, [])


    const tuotteet = ostoskori.map((items, i) => {

        return (

            <tr key={i} >
                <td><a target="_blank" href={items.url}><img className="Kuva" src={items.url} /></a></td>
                <td className="ShowOstoskori">{items.tuote}</td>
                <td className="ShowOstoskori"> </td>
                <td className="ShowOstoskori">{items.hinta.toLocaleString()}</td>
                <td><RemoveCircleIcon fontSize="small" name={i} onClick={() => Poisto(i)} /></td>
            </tr>
        )
    }
    )

    const Poisto = (i) => {
        ostoskori.splice(i, 1);
        LaskeSumma();
        if (ostoskori.length === 0) {
            TyhjennaKori();
        }
    }


    const Jatka = () => {

        JatkaOstoksia(ostoskori);

    }

    const Tyhjenna = () => {
        lisaaSumma(0);
        TyhjennaKori(0);
    }

    const LaskeSumma = () => {
        let matikka = 0;
        for (let i = 0; i < ostoskori.length; i++) {

            matikka = matikka + ostoskori[i].hinta;
        }
        setVirheetonSumma(matikka)
        lisaaSumma(matikka.toLocaleString())
    }


    return (
        <div>
            <h3>Ostoskorisi sisältö:</h3>
            <table className="Taulukko">
                {tuotteet}
            </table>
            <br></br>
            <div className="ShowOstoskori">Tilauksen kokonaisarvo: {summa} €</div><br></br>
            <Button variant="outlined" color="primary" onClick={Jatka}>Jatka ostoksia</Button><br></br><br></br>
            <Button variant="outlined" color="primary" onClick={Tyhjenna}>Tyhjennä ostoskori</Button>
            <Tilaus ostoskori={ostoskori} summa={virheetonSumma} />
            <br></br>
            <div> Lisätietoja antaa tarvittaessa <br></br> Kari Kaukovaara +35850050655
            <img className="Kuva" src ='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUXFhcXFRcVFxUVFRcXFxUXFxUWFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR8tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0rK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EADkQAAEDAgUCBAQFAwQCAwAAAAEAAhEDIQQFEjFBUWEGEyJxMoGRoUJSscHRFCPwYnKS4QczFRaC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAQEBAAIDAAIDAAAAAAAAAAERAiExAxJBMlEEIkL/2gAMAwEAAhEDEQA/APZpSDk1IJNj9SUpspSmMP1Lspi6EFh8pJq7KXosdQ3En++z2/hESYQjMqgbVaSYEfwlpwX1KpicWBbU0dS42HsOSgWZZ/FhYe9ys5jc0c48AH5qeu5Fz42mzHxBSpj/AN7iejQI+qC1fFr3AhhubAmyz1SsPy6j1Kqse9z2mGiHAwSsr3aqcwazHxJV8wAvBIsY4PRQU8+fL/UfUIueEIx+HIqFxtJJ7X6KEUi75fe6XnNVJBZ2KbVaQ+xBkFm47d0Rw2Y0nsh7jqptJLtiQP3WYZiAx4EcoZmby2o6Jv8AuiDqN/hcye5jS6rEz7xxKmwWcEOLSXOHv9CsNhsTU0EC/fpa60OR0tbQdYHEuMbbp/bzheMbTCZxqBhwBH4Xi8dlT8UZi9jZkOa4cDlBKjrlsiR8JB/Rdq1S9mku24VzpPXIDkz/AO4Kj2uc0/CO/C9cy5hfRAqNi2xXlWX1ajCQ1sjXIPSF6Zktas9pdUEW9I+Svn2yU8ywtSk0uaJa2/dYrMs2c4aQ836bzsvQn5uyCyoCBsSdlgc7ZhxVD2OHt3TsPQnEOf8ABUtA9K0eVVG06jCSSC0SBvI4Weq4jXVDnGxFlo8gNKrVAkNDbmeVHsm/wlbU0GCB3UmJaSwgbkWUFM6wNLrduyH+I8W6myWvDXdT+i0noWPKvFGplZzSoPD+LeyqIdGqxPZQZ1iXPeXPMlXshyepUpee0gCSBO5g3P2UWbSvtr6zBWou0uMt67lZalWqVcQ1j3EBoMxvtsnebVoPB8yQSAWg9TCJ5nl0PZVbu60Dcp7vgWo3VHgw1pgbWXVO6rXG7Cuqi16SkkEkvTR0JJBVcya7RLNwgK2a480iJ2RDC1w9oI6LEV8TUfU0VQb7I/klMsdpJ6ILR5OhcCRKYU8zrBrDcAhYfN84LnaWmXafU47MHbujPi6sIseDPyCxWHxMMIA9ThL3Hc9AOix+Tr8acc6hxWY6TdwNv8lVambE7afkq9Y0wZILnHYD9yuvxDWCS1nsOOxKyk1rI67Eud19+E7DvH5tTo4FgVA0FwkmOw6d091YNHpgADdMrFjF1iBfgXkqGvjAGtFxIG3fdR1PU14B2aDP7Ku2uIHJbAhLDw3EYi43uQuk6vWeHQJVStVkkmxmFa8iabW87/XZOBNgXEOjg27J1Kr69PuWzsT0IQ81oMTMFXcLXBd5h4H3TLIPDFEw0hocAILRspKeKmHbEWIQahVJLv14V7BvGqT2JHZK0YJ4PCtl2pxADgYHPK3GVZwKgDWMIAMEnZZJz3vJNNkiAPco3lT3OpeS1sPm56FdEYX2O53UpMpkvaCF5fjatJ1YaW+m++y1VTLsT6g9xeAYusxnmUvokPdYT8I5TupU6dI1MQ1um0E26BEcqew1vL+CXXPJ7KthnPbUa5gEvaQR0XKuV1QWvEzqme8qbNEeu4OiGNDRsAs542q0qlFzC4NeNp3UuR4qqymX1SSFivF+dNruhjZM8KpfB1j3gCQXIphccKdAMFR25JHF+ip4zA1BH9syb913K8G58wwktuflwlZdZrQqMAO8m/dHsdmP/oLJLmnbrZZz+rIef7cHaCOit1sdqptqC1RpsPZL1TbqjnDy0F1I6ovZJY8eMn/klJLT8PY0kPwmbNe8sA2RMBWs0mBJVLH1NVM+WRO6vvbIhYLxM2thiXsdLTxMQigMq1KjnkPkEbLQeE8TDna3e07rKYLHOe8vMG1wURy6l5tUHVpAiVKY9LaZ2TMQ4hpIUOFLWtA1AqLOcS1lIuLtPRVo/WA8XZkSQIIJ1e52WaxOL8umRfUd+3QKznmZuqOIYLX9RFr73Wb8h7xOoG5tPPC5+vLeeIVGubvJjhdovL3gDfk8NHZOOF9LQ4gG5dB+i7SIAhptydoCPR6vgTDBt9z3PZNxENGom0w0dT19lXw2IBY+oOCGMVXEV9b4PwsAHYmFMVUxrQCTaXSfbj5KJrjqlov9vdQ1f7gtYcppFomBx1KrAueY0G8F35RvPdSefE39TunHYKth6e8N+fKdiAGjulAqF5Ni2w+s+6mw7iHaSNx1XDJtxuU9tIuE9Dt2V1G1c/q9TdLdm2Pfa6J4IyW3vws7lr9NSODYrQAQwOH4T9FNmLjZ+HcYGNItJ3nhybl2cGk8uc07kA8GSg9J34gf9w+ViiOZ5lT8toYDIEnm4Wnx38Y9zyP1c3rVPgpw3YlZ3xENNMvqmTwP0RXKPEDjQcfLJi8lZPFVn4qq0vcGsuSOivfCLFJ+X1gWOJ06xLb3E8LU4LN2+W2jUYZHI5Kz+Z4jzHU6QcRGz+FoPCz6bjprOGoGAeo6lHoD+Az5jx5TKRdAv0WB8Q5hSbVcGs0uH6r0dzRh2ufSaHyeAvLvFz/MqlwpweVU9BJl+eB7vWbwYRbwfnFNtU0nwGnUSTzfZBaOCBY2owAECPsoctw4h1RwmCQI+6n/AGxItmGPp/1RaxocJsYsJKreMKTG6dEauYt9VUxGaNcNFNgaRuefqh+NLtIc4yj7eRch2GpnSPTKSjw+LcGgJKcQ0uAzp4r6hO69YwGI1sDuoXiOUUvMe71RF/e69Q8HVDo0l8kKmkutLU2Xn/jBpYCQ4ubyFrc2x7Weknded+I67m6hOpp2lFp3xGZp1CXjSYlEqHnNdobJJ2/lCKJ0u1QLXCO5Xjw6pJ3tEcqExu/CGXVQ0OrH1fWEF/8AJePAqUqWr4QXOH+6zSfutpk9fVSBiDC8o8aYxuJxdWo0jQ2GT+YsJk/VVfTSew1tHU7fW28i4uqWKawenRHSJlVH4kGQCQByDZMZmDgLEu/1FR+NCqSBcKOfQRO+56BPNUbuqA/JVqtYHaw/VRYF2m8Cn5beo+ahfE3/AOP7lU34uNlLh6Dny4i28JZ5XKmZULjDLntsjGDyr8VQ3+yjy+rRZcmDzYqerm4JhoLuk2H0SvTSQ7FllMWt06lDQ2TO5XahcSSbn/Nk9kAe+56JwrDKVKZnbcn9l01tPqi2w79UyrWmALNH391XxD9RtsFcZ1NiG6XB421A/VH8LUFwdnBAKdUFpa7b/NkRw9SGgnjlLoc+h/LakNAN4t7hFjXc0aqYDiBtAWYwGI0vI4RK0mKhaI+vZHx3Kj5Jk0VxWdUv6UtPoqxcd1kcqoPqtc5psDHfuu+I8a1+kNFwLkfJV8hrva535dJmbBa6y1cxrqg0aRIBt1stZkX9PUcS70u082uFkMuzPy6zXEamibe61+Nw9J9B1RtnlHuiNF4fxTWl4c8ETbsELzgYV9Q+sd1msv8AMYz0AkmZO6GYTLnVsQQ95gXnqeiN6gormmUCmS6i86IsJ5RDI6VClQ11ngukw3vdCn5o2i7yntsDv+imw7WYmm52kgMJg94T+3kgfPcE8Oc9rCGu/RUsc+npZDCODPJV3Ms3cAWG4FgqWXf3HDU74ZMbovtNnlZo0qOkWdt0SUb8Xc+64l5GIMLWLXEhbXwZjnNBIvflYPXBKK5fnJpiGonpPNxoM5zo+eC7g7Ib4ix3mwGBCsVizUdqKifiDMqZV2nuwpO9rJuHIpvDp2M/RQ1MUSod07ND0HLfGALKjC6HOY4MPRxaRIXn9Rzms0FwMWJ6kXc75mVMwimx1Q7gQ33dayBYisdPeDKjfxrz6FTlpNOg1jZc5he7vqcY+wQx4LCQ6xH4T/K2WSgCk2p+XDtI+6ADCvrvHQn5nqidN78fjQZzgTJEfcKCse/+dgjWPySo2pobsTZEct8MgOl/qgqtntnOKCZNlD6hkggLXYXLw0RCKMwoaIAC64gbrPvrfTbnnIGVcuBuAPpKHYnLX7zHfZGcRmlNvU+yH4vOqRBBkdFEXoJWqPYYL2kKtUxJNhcLtXQ8nSbnZV6lGqLRA7cq5yz6qUGd7J8ADoPuqga9vABTRqO5VM7FmnUlwjblFsHUto4KEYYAfuVPQeQUdHBeg4yAdzA+hRzLW0qlRzXmAAg1A6tRidEX5kqAVtJLr8yVPKO7kXc8wjaUBhDgfshVBxcQCYE3hV6uKLibn5qTAiXD35Wvtz75TYwtY/0GyP4fN21KJ1O0uFo42WezP47QrlCqzyC3SA4Xnkos8qlaR2bllBpYRMXQPLalQl1WYE3jm6EvqEN+K3RS4bMC0BvE7JbS9j9bDio3zSDvsUZ8K4ukylUY+buMWsAVNjqo8hrmhs2sqOBx7GsLT8bje2yrxkpg/iLyWvIbcdUBwtc036uFczimRUMmQUMeDwUW6irTq8kmN0lFRfYXSTTprzcwVJSconsEldY9L8Sth/dce4lQB0qVpspXKaxkrrTCc02TDdNR+OrNFGXbkjSPblA69UOaesfqr+b03Ppgj8M27dVnn1wL7dkSa0lx6bkLdWEoRs6kGu+TipMFhhhq7mTPoOiephAvAOcTRdRJvTdLT/pK01B5cSXAGTudx7LHvZXdPPOpqlIFwMbbKaAoHv8AVHCQeppYslqp42iYMXVllSy6XShWMxiNIsaTyeYCCYvGYbZ4c33GxWyxTiOf+1n8yw7KvxUzPWFcZdSsvXpMJmm89uD7ojg8xdZtS/QptbLwXTccABE8FlIiSJ91Vwpyp4oSCQhwpPJgBEM3xPl+nTfp2Q1uLqO+AfTdKH1gnSy5wY5zzEbAJmGYSf1Kp0atcnQZubg8rSZXRFMetsyZP8Is1OyKwr6WlrbGZnlR1cSSLgdyEQxLaZMhhjlDapAmNk+ZjD5FapTMz1SBd1XXVE1pV6yJzjN1M6ooHiU4XTpamieUxzRIsm6k4PUnMXquKeWiHGBwpspzJrA/zBLjseiFmrFkmoLUtevJJJVd7017uiRE+6ZJ6T7BJcptMJKi2Iy8yVwvVutl1SbXTKuDe0bI2C81DRceVb1Kg5xFiCp6LiQppxPUFrKEVCn03SEmgAFzrAbdyjV2IcwxJpMt8RH0CzFSk40/NgkEkT81dzjEkyVZxWJpNwNKiPjDdT7ficZhafHN8jv+hL/x3hdTar/9QbPyla/CVHA6SNuep4QTwBR04MHbU8n9kYa6Cfdc3y3enb8ezjE4Ekz1UoULHfypNU8LNo658Jj8QeFyqmsZe5TPSqnUIcFTfg3HmyKtcFVxuKawEzCY9qrMIBxKnp04lLDPe5uqABwOfdXqbEUvTH+IMNNQf7B77oHQyWoXHySTUJ9I2gcklbHP6EOZUiREHtBV7JMMAC+IkK53Z4Y9c/qrhstFJgL4dV0gF3Q/i0rjheD0sieMpztwqZ0k3Wssxz3d0zBbGUCxTIcVp8DTAholz3mGtaJcfYKjm2S1w9w/p6stbqJDdQj3HKV6ir8fVZwu7LjWyutJIloMHqI23ldAKUusrLPFRvC41sJxSLU/aCa66dqErgYuRdAP0zspmndVw6F1tUkKOgY910110qpkpHhXAsUtgku0tgkqLGncy/RcNKd4Uj6gO5UQIBXJrrwv6Cm7fdRPwrG2gFWA/smhmq/HKv7XCnKrUaxg1afb3WYzbGFxjb22RTOsy1GB8LbDv1Ky+Iqk7q+Zvs+7kxUxb1HiHkt7pYgrjNl1c+nLb5eieE3RhKY6C/1VzE1LT3QjwxWmiB0sr+IFiPuuHr+Velz/ABW6FWwKuNdICCYJxkjojNLZSo/SuFvf5pmu8Db/ACFXxOK09JT0JsRXDBMoRiKTqjS7Yfhnn3TqXrOpxB6DhX5BFx7dFUGh9DxXSaQyoC3ja31RulmdMiQ6ZWWz/BNc0xHdDctw1UmNUAD59k7zR9pW5rVW1AB7hUKuJcyhVGxlob+phUslqO03PKlzurYDp9yd0vaO8miIrmpTa8G5F0MrU6gOoXVfAuIbZ/yV3C62iXnfhXLjnwU8O5s2hXpVntJADmutdodyPot3/wDf8FLm6nA8S0+q2wsvJ3YyKl9kx2La58ylnf8AzVdfXrLSx2JOt1t3Od/ydKomsitGs0ucHAGdkMxbRqgBVJGfyW9W2q5ddcdUXS1RSVUZHF675q4IPC44I8JSlwhJNDSQuubCjPIMDuyY96cx90i1aSBPSqCAkmUWWFl1VgaF7jN1E9xHC7UGn4nQqGLzpjBZzfquPHZF5uId7DqVSzDMoboafi3PZCHZqarobJi56KtiK/P0WnPBfaG4qtNlRrJzzPVRVXLo5jLq6q13LrSmVikwrfj0w6uXGp8MYiGxK0rXghYnw/Whxb8/5WsY9cXzTO69H4rvESUzpeD1si7niPZAnVP+lOMdaPqslrzK4g93fZD8yxU+lglx+yndV9Njci6rMogGeeqJCtCcXTxFMB1nDkDcJ2G8QsAhzXyN0TqVuJHz2VDE4WlU5DXcxsVpJKeXEtPN6FWROmOu6u0dI2Ihwt9Fm6vh0kzrG9lcyug8SDfSNITssT40dyfDkgkcfuosxyyo4WKNUMMabAB0v7qYSVER1dZbAZfUY8F2yv47VFhKK1KYJuoRQIPZVqMY7GeY50aTHVQ/Bcgrbub2TDQpuHqaE51EXlj8vrHUT1Vis+SSjn/xNEm1k92Us4EqpmlfMZ5jlG8rQVMtbNhCY/JWu5go+0T9KAAwpWCUWp5GdvuujIT1RsT9KFQuOYUVdlEcqF2Xv4U7D+tCXG6ex6mr4ZwN2qI0yOCtJdRlT0TYLiipAwF1MsDsQ5znEvqOPYGFUqEDYfyu16pkqKiNRnpf5onMn4176q7S9LCNid1BUclUqknsoSUTyK6SoahT1C7lWmq1d11xpXK+64wrfmeHP17EMA/S8EfNbGlVkBYQEgW+XyW6cwOpU8RS+F7Zc0fhI3/Rc/z8/ru/xu5mGYioqDsRBXalWdrqtUaueRt1cFcPiJi9kaoOG33WGpYlzDfabFF6GaiJlH1EujmKy3ULFBMTlLxcfZE8NmgICtHEjeQiRe2A2X03AiTPRdw+cMpYhjCZlxDz+Wdk3Oc1DfRTjWd/9P8A2gFDBNkl8mbzPKvni9MPk+by9Rp1SBeI49l2s7lvRDsuxLBQpFx9J9Go8OHDkUbTcBaCDttBUWZcKXUWHxJj1BSQCd4K69pi4VavMhw4Ums1WxY3VQMHBTaeIkkHdTswzXbGD0S3Qq1PTdKjih7K1iMJAFwFVqU2FwFk8LD21tQK5pHMpn9K5l23Ca7EOH4Uhd/E4JHwlSNqlV6eLBsRCeXd0DU5r9km1GnhQUqwNiuGoNkrRq4aTCov6Np6JoqWhMfiA07Kp0MTty1kbLi7SxYgJJ/el9XlOJdcp9E6W+91XqmXR3Vh3A+66bNYTycO6a5dBTSUKMconlSuULk02/irUElRgovlVBhcS4E+yr5xhw12pohrtp6hbT0x69mYOi59mif2W18OUqtOk6i7ToEuE9D+FZnI8QGNcB8bjx0/ZGKtJ72Oh0O0HT1snc/WnHj0bj8MabpkFp2jjsVTZXBO6CsZUaZM8apuCi1KkKwe4N8stO3BHUFY34t8xvPl/K7jCCP4VIUncSrVLDn39lK5xa0mCQN4ussaFg8JU3LwxsXJUDMa4lwa+Y52VXEVXvJmzeFVZW0k2T44lqe/kyL4pDVMkkm/PuiFVzQLwP4QZ+MJ2sq7nSuic45L35bHJMzpPD8O8y2q0hs8P4hT4HMqtB2iS5s/C4zt+UrE0nQQRuLg91paVQVmCTvYno4bLD5eP1v8XetrQzVtZsMdFQbsduP5T8FULZD1haWIdOh9nt+Bw3K0eT5uKpDahvtO31XPZjeTRylUbvF0nt5AumvwgEQ6F1zDxdKwndGr4pVSthxqlWPPI3CcKjbp5MCo2uWiAbBdZXm0T7KYsH5d1NScGXb8wVOUBlVzgfhsq1XEyYmOy0FPHAyKjQQqWOpYd12thF539GhRxMfup6eNbyoXYQGbrjcKRbhK84BFtZrtrFLXwYKoBkcpjpCj7VVn9DlJggbJIZQxDtISVfdOVgKFA6iU9rCZMLiS765ufTrqR6fdcfSPT7pJKVIdBTX0ndEkk2azlzzTMqxiaja1gL3N0klrCvpRZSfTfYD7XHRWH5lWn0wBxtskkn16Tyqang+91MMU/aEkllXRwlw1V8FpAgAkHnfqoahftJAO8HdJJZ/rSo3sdEQqtak7okktIx+T0TaLoTvKK4kt45nfLPRFsrqGHMLd7/NJJO+mvx/i9Vol4nkcqrWa5pDx81xJcbparJs31EUqn/5dz7FHv6NwMtN0klh+r/ErGO/EAmvwISSVFUdbDOGxXWA8hJJTQkpta6yhr5d0SSTgUqmEc0XUNV5buEklNMxjg7iCn+WkkohkzVGySSSeB//Z' />
            </div>
                   </div>
    )

}

export default ShowShoppingList;