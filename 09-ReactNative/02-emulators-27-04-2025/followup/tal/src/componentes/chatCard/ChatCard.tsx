import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WhatsAppMessageCard = ({
    timestamp = '19:22',
    message = 'Message content here...',
    hasUnread = false,
    unreadCount = 0,
    avatarSource = null,
    isPinned = false,
    isMuted = false,
    isMessageDelivered = true,
    isRTL = true, // For right-to-left languages like Hebrew
}) => {
    return (
        <View style={styles.container}>
            {/* Avatar Section */}
            <View style={styles.avatarContainer}>
                {avatarSource ? (
                    <Image source={avatarSource} style={styles.avatar} />
                ) : (
                    <View style={[styles.avatar, styles.defaultAvatar]}>
                        <Text style={styles.avatarText}>A</Text>
                    </View>
                )}
            </View>

            {/* Content Section */}
            <View style={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.contactName} numberOfLines={1}>
                        {isRTL ? 'אלין, ביטים שני, יום כדור הארץ (...)' : 'Aline, Bits team, Earth Day (...)'}
                    </Text>
                    <Text style={styles.timestamp}>{timestamp || '19:22'}</Text>
                </View>

                <View style={styles.messageRow}>
                    <View style={styles.messageContent}>
                        <Text
                            style={[styles.messageText, isRTL && styles.rtlText]}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {message || (isRTL ? 'אלין, ביטים שני, יום כדור הארץ (...)' : 'Message content here...')}
                        </Text>
                    </View>

                    <View style={styles.statusContainer}>
                        {isMuted && (
                            <View style={styles.iconPlaceholder} />
                            // Replace with actual muted icon
                            // <Image source={require('./path-to-muted-icon.png')} style={styles.statusIcon} />
                        )}

                        {isMessageDelivered && (
                            <View style={styles.iconPlaceholder} />
                            // Replace with actual checkmark icon
                            // <Image source={require('./path-to-checkmark-icon.png')} style={styles.statusIcon} />
                        )}

                        {hasUnread && unreadCount > 0 && (
                            <View style={styles.unreadBadge}>
                                <Text style={styles.unreadCount}>{unreadCount}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0.5,
        borderBottomColor: '#E0E0E0',
    },
    avatarContainer: {
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    defaultAvatar: {
        backgroundColor: '#128C7E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    contactName: {
        fontSize: 16,
        fontWeight: '600',
        flex: 1,
        color: '#000000',
    },
    timestamp: {
        fontSize: 12,
        color: '#8F8F8F',
        marginLeft: 5,
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    messageContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    pinIcon: {
        width: 12,
        height: 12,
        marginRight: 5,
    },
    iconPlaceholder: {
        width: 12,
        height: 12,
        backgroundColor: 'transparent',
    },
    messageText: {
        fontSize: 14,
        color: '#8F8F8F',
        flex: 1,
    },
    rtlText: {
        textAlign: 'right',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusIcon: {
        width: 16,
        height: 16,
        marginLeft: 5,
    },
    unreadBadge: {
        backgroundColor: '#25D366',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },
    unreadCount: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default WhatsAppMessageCard;