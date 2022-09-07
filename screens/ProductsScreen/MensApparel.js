import { Image, Text, View, ScrollView } from 'react-native'
import styles from './styles';
import 'react-native-gesture-handler';


export default function MensApparel({navigation}) {

    return (
        <View style = {styles.mainView}>
        <Text style = {styles.Heading}> Mens Apparel</Text>
          <ScrollView style = {styles.ScrollView}>
          <View style = {styles.MensProducts}>
            <View style = {styles.MensProduct1}>
              <Image  style = {styles.MensProductsImage1} 
                source={require('../../assets/mens-products-1.png')}/>
            
                  <View style = {styles.MensProductsTag}>
                    <Text style = {styles.MensProductsTagText}>EPIC FULL ZIP JACKET - COOL GREY</Text>
                    <View style = {styles.MensProductsPrice}>
                    <Text style = {styles.MensProductsOldPrice}>R1000.00</Text>
                    <Text style = {styles.MensProductsNewPrice}>   R700.00</Text>
                    </View>
                </View>
              </View>  
           


              <View style = {styles.MensProduct2}>
                <Image  style = {styles.MensProductsImage2} 
                  source={require('../../assets/mens-products-image-2.png')}/>
                    <View style = {styles.MensProductsTag}>
                      <Text style = {styles.MensProductsTagText}> INSULATED SV JACKET - ORANGE</Text>
                      <View style = {styles.MensProductsPrice}>
                        <Text style = {styles.MensProductsOldPrice}>R2000.00 </Text>
                        <Text style = {styles.MensProductsNewPrice}>  R1800.00 </Text>
                        </View>
                </View>
            </View>   
            </View>


            <View style = {styles.MensProducts}>
              <View style = {styles.MensProduct3}>
                <Image  style = {styles.MensProductsImage3} 
                  source={require('../../assets/mens-products-2.png')}/>
                    <View style = {styles.MensProductsTag}>
                      <Text style = {styles.MensProductsTagText}> WINDBREAKER - YELLOW FLUO</Text>
                      <View style = {styles.MensProductsPrice}>
                        <Text style = {styles.MensProductsOldPrice}>R1500.00</Text>
                        <Text style = {styles.MensProductsNewPrice}>   R1333.00</Text>
                        </View>
                    </View>
             </View>

            <View style = {styles.MensProduct4}>
              <Image  style = {styles.MensProductsImage4} 
                source={require('../../assets/mens-products-image-3.png')}/>
                  <View style = {styles.MensProductsTag}>
                    <Text style = {styles.MensProductsTagText} >LEAF COLD JACKET LT GEN 2 - BROWN </Text>
                    <View style = {styles.MensProductsPrice}>
                      <Text style = {styles.MensProductsOldPrice}>R1500.00</Text>
                      <Text style = {styles.MensProductsNewPrice}>   R1333.00</Text>
                      </View>
                  </View>
              </View>
            </View>

            <View style = {styles.MensProducts}>
              <View style = {styles.MensProduct5}>
                <Image  style = {styles.MensProductsImage5} 
                  source={require('../../assets/mens-products-13.png')}/>
                    <View style = {styles.MensProductsTag}>
                      <Text style = {styles.MensProductsTagText}>SWEAT PANTS - BLACK</Text>
                      <View style = {styles.MensProductsPrice}>
                        <Text style = {styles.MensProductsOldPrice}>R900.00 </Text>
                        <Text style = {styles.MensProductsNewPrice}>   R800.00</Text>
                        </View>
                    </View>
                </View>

            
            <View style = {styles.MensProduct6}>
              <Image  style = {styles.MensProductsImage6} 
                source={require('../../assets/mens-products-6.png')}/>
                  <View style = {styles.MensProductsTag}>
                    <Text style = {styles.MensProductsTagText}> HIGH TECH JOGGERS - ASH GRAY </Text>
                    <View style = {styles.MensProductsPrice}>
                      <Text style = {styles.MensProductsOldPrice}>R900.00 </Text>
                      <Text style = {styles.MensProductsNewPrice}>   R800.00</Text>
                      </View>
                  </View>
              </View>
              </View>

              <View style = {styles.MensProducts}>
              <View style = {styles.MensProduct6}>
                <Image  style = {styles.MensProductsImage6} 
                  source={require('../../assets/mens-products-9.png')}/>
                  
                <View  style = {styles.MensProductsTag}>
                    <Text style = {styles.MensProductsTagText}> WOVEN TRACK PANTS - BLUE </Text>
                    <View style = {styles.MensProductsPrice}>
                      <Text style = {styles.MensProductsOldPrice}>R800.00 </Text>
                      <Text style = {styles.MensProductsNewPrice}>   R650.00</Text>
                      </View>
                </View>  
              </View>


            <View style = {styles.MensProduct6}>
              <Image  style = {styles.MensProductsImage6} 
                source={require('../../assets/mens-products-5.png')}/>
                < View style = {styles.MensProductsTag}>
                <Text style = {styles.MensProductsTagText}> STRETCH PANTS - CHARCOAL</Text>
                <View style = {styles.MensProductsPrice}>
                <Text style = {styles.MensProductsOldPrice}>R1000.00  </Text>
                <Text style = {styles.MensProductsNewPrice}>   R900.00</Text>
                </View>
              </View>  
            </View>
            </View>
 
            </ScrollView>
 
        </View>
    );
}

