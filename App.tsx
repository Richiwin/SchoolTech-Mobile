import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './Components/OnBoarding';
import DashBoard from './Components/DashBoard';
import SignIn from './Parent/SignIn';
import SignUp from './Parent/SignUp';
import SignUpNext from './Parent/SignUpNext';
import ForgotPassword from './Components/ForgotPassword';
import VerifyEmail from './Components/VerifyEmail';
import ChangedPassword from './Components/ChangedPassword';
import ResetPassword from './Components/ResetPassword';
import VerifyEmailCode from './Components/VerifyEmailCode';
import AccountCreated from './Components/AccountCreated';
import ParentDashBoard from './Parent/ParentDashBoard';
import StudentDashboard from './Student/StudentDashbord';
import Feature from './Student/Feature';
import ParentFeature from './Parent/ParentFeature';
import StudentLogin from './Student/StudentLogin';
import OtpVerification from './Components/OtpVerification';
import VerificationCode from './Parent/VerificationCode';
import ConfirmOtp from './Parent/ConfirmOtp';
import EmailVerification from './Parent/EmailVerification';
import AddAccount from './Parent/AddAccount';
import PaymentSummary from './Parent/PaymentSummary';
import TeacherLogin from './Teacher/TeacherLogin';
import PasswordReset from './Teacher/PasswordReset';
import PasswordConfirmed from './Teacher/PasswordConfirmed';
import Attendance from './Teacher/Attendance/Attendance';
import AllStudentList from './Teacher/Attendance/AllStuddentList';
import AttendanceDashboard from './Teacher/Attendance/AttendanceDashboard';
import StudentPreRegistration from './Parent/StudentPreRegistration';
import PaymentInformation from './Parent/PaymentInformation';
import PaymentConfirmation from './Parent/PaymentConfirmation';
import AssignmentDashboard from './Teacher/Assignment/AssignmentDashboard';
import TeacherDashboard from './Teacher/TeacherDashboard';
import ClassSummary from './Teacher/class summary/ClassSummary';
import Announcement from './Teacher/Announcement/Announcement';
import ClassEvent from './Teacher/Events/ClassEvent';
import Classes from './Teacher/Classes/Classes';
import ClassSchedule from './Teacher/Class-Schedule/ClassSchedule';
import ClassResources from './Teacher/Class-Resources/ClassResources';
import GradeBook from './Teacher/Grade-Book/GradeBook';


function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="onboarding" component={OnBoarding} />
          <Stack.Screen name="dashboard" component={DashBoard} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signupnext" component={SignUpNext} />
        <Stack.Screen name="forgotpassword" component={ForgotPassword} />
        <Stack.Screen name="verifyemail" component={VerifyEmail} />
        <Stack.Screen name="changedpassword" component={ChangedPassword} />
        <Stack.Screen name="resetpassword" component={ResetPassword} />
        <Stack.Screen name="verifyemailcode" component={VerifyEmailCode} />
        <Stack.Screen name="accountcreated" component={AccountCreated} />
        <Stack.Screen name="parentdashboard" component={ParentDashBoard} />
        <Stack.Screen name="studentdashboard" component={StudentDashboard} />
        <Stack.Screen name="feature" component={Feature} />
        <Stack.Screen name="parentfeature" component={ParentFeature} />
        <Stack.Screen name="studentlogin" component={StudentLogin} />
        <Stack.Screen name="otpverification" component={OtpVerification} />
        <Stack.Screen name="verificationcode" component={VerificationCode} />
        <Stack.Screen name="confirmotp" component={ConfirmOtp} />
        <Stack.Screen name="Emailverification" component={EmailVerification} />
        <Stack.Screen name="addaccount" component={AddAccount} />
        <Stack.Screen name="paymentsummary" component={PaymentSummary} />
        <Stack.Screen name="teacherlogin" component={TeacherLogin} />
        <Stack.Screen name="passwordreset" component={PasswordReset} />
        <Stack.Screen name="passwordconfirmed" component={PasswordConfirmed} />
        <Stack.Screen name="attendance" component={Attendance} />
        <Stack.Screen name="allstudentlist" component={AllStudentList} />
        <Stack.Screen
        name="attendancedashboard"
        component={AttendanceDashboard}
        />



        <Stack.Screen
          name="studentpreregistration"
          component={StudentPreRegistration}
        />

        <Stack.Screen
          name="paymentinformation"
          component={PaymentInformation}
        />
        <Stack.Screen
          name="paymentconfirmation"
          component={PaymentConfirmation}
        />
          <Stack.Screen
          name="assignmentdashboard"
          component={AssignmentDashboard}
        />


        <Stack.Screen name="teacherdashboard" component={TeacherDashboard} />
        <Stack.Screen name="classsummary" component={ClassSummary} />
        <Stack.Screen name="announcement" component={Announcement} />
        <Stack.Screen name="classevent" component={ClassEvent} />
        <Stack.Screen name="classes" component={Classes} />
        <Stack.Screen name="classschedule" component={ClassSchedule} />
        <Stack.Screen name="classresources" component={ClassResources} />
        <Stack.Screen name="gradebook" component={GradeBook} />



       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
