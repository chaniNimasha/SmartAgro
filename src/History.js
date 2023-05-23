import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HistoryDaily from './HistoryDaily';
import HistoryWeekly from './HistoryWeekly';
import HistoryMonthly from './HistoryMonthly';
import HistoryQuarterly from './HistoryQuarterly';

const Tab = createMaterialTopTabNavigator();

export default function History() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#000928' },
            }}>
            <Tab.Screen name="Daily" component={HistoryDaily} />
            <Tab.Screen name="Weekly" component={HistoryWeekly} />
            <Tab.Screen name="Monthly" component={HistoryMonthly} />
            <Tab.Screen name="Quarterly" component={HistoryQuarterly} />
        </Tab.Navigator>

    );
}