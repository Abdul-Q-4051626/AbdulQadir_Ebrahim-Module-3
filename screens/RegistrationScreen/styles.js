import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 40,

    },
    TopView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    IconName: {
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 60,
    },
    ImageStyle: {
        width: 70,
        height: 79,
    },
    Heading: {
        color: '#2a2a2a',
        marginLeft: 5,
        marginTop: 15,
        fontSize: 24,
        fontWeight: 'bold',
  
    },
    Slogan:{
        color: '#a1a1a1',
        fontSize: 18,
        marginLeft: 5,
    },
    Reg: {
        color: '#2a2a2a',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    FormView:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
    },
    TextInput:{
        width: '60%',
        borderWidth:1,
        borderColor:'black',
        height: 52,
        borderRadius:10,
        paddingLeft: 10,
        marginTop: 20,
        color: 'black',
        fontWeight:'bold',

    },
    Button:{
        width:'60%',
        height: 52,
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        fontSize:18,
        backgroundColor:'black',
    },
    ButtonText: {
        color: 'white',
        fontSize:14,
        fontWeight:'bold',

    },
    LoginText: {
        color: 'blue',
        fontWeight:'bold',
        paddingBottom: 20,
    },
    LoginButton:{
        width:'100%',
        marginTop: 20,
        alignItems: 'center',
        display: 'flex',
        
    },
});