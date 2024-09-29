
INSERT INTO T_SEQUENCE
(SEQ_NAME, NEXT_VAL, SEQ_DATE, PREFIX, PADDING, CD_PREFIX_TYPE, CD_CYCLE_OPTION, CD_REC_STAT, FRST_REG_USER_ID, FRST_REG_DTTM, LAST_UDT_USER_ID, LAST_UDT_DTTM)
VALUES('USER_SEQ', 1, datetime('now','localtime'), NULL, 10, 'O', 'D', '1', '0', datetime('now','localtime'), '0', datetime('now','localtime'));


