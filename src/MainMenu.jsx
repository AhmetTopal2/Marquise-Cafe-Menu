import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardLink, Row, CardImg, CardGroup } from 'reactstrap';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MenuSelect from './MenuSelect';
import Kruvasan from './Kruvasan';
function MainMenu() {

    const StyledDiv = styled.div`
    width:75%;
    `
    const StyledHeader3 = styled.h3`
    border:1px solid black;
    text-align:center;
    width:100%;
    margin-bottom:25px;
    color:white;
    `
    return (
        <StyledDiv>
            <StyledHeader3>
                Menü
            </StyledHeader3>
            <Switch>
                <Route path="/" exact></Route>
                <Route path="/kruvasanlar">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px", padding: "0 10px", marginTop: "10px", }}>
                        <Card
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h6" style={{ margin: "0", padding: "0" }}>
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                                style={{ height: "100px" }}
                            />
                            <CardBody>
                                <CardText>
                                    Kahvaltımız saat 14.00'e kadardır.

                                    Marquise özel ekmek üzerine domates soslu göz yumurta, ezine peyniri, kelle kaşar, labne, zeytin, köz biberli pesto, kuru domates mix, marine tereyağ, hindi füme, roastbeef, domates, salatalık, bal, kaymak, süt reçeli, çilek reçeli, 2 adet kruvasan ve mini french toast.

                                    Kahvaltımıza kişi başı 2 bardak çay dahildir.

                                    Ekstra domates soslu göz yumurta tabağı  220₺
                                </CardText>
                            </CardBody>
                        </Card>

                    </div >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px", padding: "0 10px", marginTop: "10px", }}>
                        <Card
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h6" style={{ margin: "0", padding: "0" }}>
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                                style={{ height: "100px" }}
                            />
                            <CardBody>
                                <CardText>
                                    Kahvaltımız saat 14.00'e kadardır.

                                    Marquise özel ekmek üzerine domates soslu göz yumurta, ezine peyniri, kelle kaşar, labne, zeytin, köz biberli pesto, kuru domates mix, marine tereyağ, hindi füme, roastbeef, domates, salatalık, bal, kaymak, süt reçeli, çilek reçeli, 2 adet kruvasan ve mini french toast.

                                    Kahvaltımıza kişi başı 2 bardak çay dahildir.

                                    Ekstra domates soslu göz yumurta tabağı  220₺
                                </CardText>
                            </CardBody>
                        </Card>

                    </div >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px", padding: "0 10px", marginTop: "10px", }}>
                        <Card
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h6" style={{ margin: "0", padding: "0" }}>
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                                style={{ height: "100px" }}
                            />
                            <CardBody>
                                <CardText>
                                    Kahvaltımız saat 14.00'e kadardır.

                                    Marquise özel ekmek üzerine domates soslu göz yumurta, ezine peyniri, kelle kaşar, labne, zeytin, köz biberli pesto, kuru domates mix, marine tereyağ, hindi füme, roastbeef, domates, salatalık, bal, kaymak, süt reçeli, çilek reçeli, 2 adet kruvasan ve mini french toast.

                                    Kahvaltımıza kişi başı 2 bardak çay dahildir.

                                    Ekstra domates soslu göz yumurta tabağı  220₺
                                </CardText>
                            </CardBody>
                        </Card>

                    </div >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px", padding: "0 10px", marginTop: "10px", }}>
                        <Card
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h6" style={{ margin: "0", padding: "0" }}>
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                                style={{ height: "100px" }}
                            />
                            <CardBody>
                                <CardText>
                                    Kahvaltımız saat 14.00'e kadardır.

                                    Marquise özel ekmek üzerine domates soslu göz yumurta, ezine peyniri, kelle kaşar, labne, zeytin, köz biberli pesto, kuru domates mix, marine tereyağ, hindi füme, roastbeef, domates, salatalık, bal, kaymak, süt reçeli, çilek reçeli, 2 adet kruvasan ve mini french toast.

                                    Kahvaltımıza kişi başı 2 bardak çay dahildir.

                                    Ekstra domates soslu göz yumurta tabağı  220₺
                                </CardText>
                            </CardBody>
                        </Card>

                    </div >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px", padding: "0 10px", marginTop: "10px", }}>
                        <Card
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h6" style={{ margin: "0", padding: "0" }}>
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                                style={{ height: "100px" }}
                            />
                            <CardBody>
                                <CardText>
                                    Kahvaltımız saat 14.00'e kadardır.

                                    Marquise özel ekmek üzerine domates soslu göz yumurta, ezine peyniri, kelle kaşar, labne, zeytin, köz biberli pesto, kuru domates mix, marine tereyağ, hindi füme, roastbeef, domates, salatalık, bal, kaymak, süt reçeli, çilek reçeli, 2 adet kruvasan ve mini french toast.

                                    Kahvaltımıza kişi başı 2 bardak çay dahildir.

                                    Ekstra domates soslu göz yumurta tabağı  220₺
                                </CardText>
                            </CardBody>
                        </Card>

                    </div >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px", padding: "0 10px", marginTop: "10px", }}>
                        <Card
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h6" style={{ margin: "0", padding: "0" }}>
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                                style={{ height: "100px" }}
                            />
                            <CardBody>
                                <CardText>
                                    Kahvaltımız saat 14.00'e kadardır.

                                    Marquise özel ekmek üzerine domates soslu göz yumurta, ezine peyniri, kelle kaşar, labne, zeytin, köz biberli pesto, kuru domates mix, marine tereyağ, hindi füme, roastbeef, domates, salatalık, bal, kaymak, süt reçeli, çilek reçeli, 2 adet kruvasan ve mini french toast.

                                    Kahvaltımıza kişi başı 2 bardak çay dahildir.

                                    Ekstra domates soslu göz yumurta tabağı  220₺
                                </CardText>
                            </CardBody>
                        </Card>

                    </div >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px", padding: "0 10px", marginTop: "10px", }}>
                        <Card
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h6" style={{ margin: "0", padding: "0" }}>
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                                style={{ height: "100px" }}
                            />
                            <CardBody>
                                <CardText>
                                    Kahvaltımız saat 14.00'e kadardır.

                                    Marquise özel ekmek üzerine domates soslu göz yumurta, ezine peyniri, kelle kaşar, labne, zeytin, köz biberli pesto, kuru domates mix, marine tereyağ, hindi füme, roastbeef, domates, salatalık, bal, kaymak, süt reçeli, çilek reçeli, 2 adet kruvasan ve mini french toast.

                                    Kahvaltımıza kişi başı 2 bardak çay dahildir.

                                    Ekstra domates soslu göz yumurta tabağı  220₺
                                </CardText>
                            </CardBody>
                        </Card>

                    </div >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: "10px", padding: "0 10px", marginTop: "10px", }}>
                        <Card
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h6" style={{ margin: "0", padding: "0" }}>
                                    Card title
                                </CardTitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                                style={{ height: "100px" }}
                            />
                            <CardBody>
                                <CardText>
                                    Kahvaltımız saat 14.00'e kadardır.

                                    Marquise özel ekmek üzerine domates soslu göz yumurta, ezine peyniri, kelle kaşar, labne, zeytin, köz biberli pesto, kuru domates mix, marine tereyağ, hindi füme, roastbeef, domates, salatalık, bal, kaymak, süt reçeli, çilek reçeli, 2 adet kruvasan ve mini french toast.

                                    Kahvaltımıza kişi başı 2 bardak çay dahildir.

                                    Ekstra domates soslu göz yumurta tabağı  220₺
                                </CardText>
                            </CardBody>
                        </Card>

                    </div >
                </Route>
            </Switch>
        </StyledDiv>
    )
}

export default MainMenu
